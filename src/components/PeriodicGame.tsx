'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { elements, Element, categoryColors, categoryNames, getElementByPosition, shuffleArray } from '../data/elements';

interface GameState {
  score: number;
  level: number;
  timeLeft: number;
  isPlaying: boolean;
  isPaused: boolean;
  placedElements: Map<string, Element>;
  availableElements: Element[];
  gameOver: boolean;
  gameWon: boolean;
  requiredCount: number;
}

const INITIAL_TIME = 600; // 10 minutes in seconds

export default function PeriodicGame() {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    level: 1,
    timeLeft: INITIAL_TIME,
    isPlaying: false,
    isPaused: false,
    placedElements: new Map(),
    availableElements: [],
    gameOver: false,
    gameWon: false,
    requiredCount: 0,
  });

  const [draggedElement, setDraggedElement] = useState<Element | null>(null);
  const [highlightedSlot, setHighlightedSlot] = useState<string | null>(null);

  // Helper function to compute total valid slots in the periodic table
  const computeTotalSlots = useCallback((): number => {
    let count = 0;
    
    // Main periodic table (7 periods, 18 groups)
    for (let period = 1; period <= 7; period++) {
      for (let group = 1; group <= 18; group++) {
        const element = getElementByPosition(group, period);
        if (element) {
          count++;
        }
      }
    }
    
    // Lanthanides (atomic numbers 57-71)
    for (let i = 57; i <= 71; i++) {
      const element = elements.find(el => el.atomicNumber === i);
      if (element) {
        count++;
      }
    }
    
    // Actinides (atomic numbers 89-103)
    for (let i = 89; i <= 103; i++) {
      const element = elements.find(el => el.atomicNumber === i);
      if (element) {
        count++;
      }
    }
    
    return count;
  }, []);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameState.isPlaying && !gameState.isPaused && gameState.timeLeft > 0) {
      interval = setInterval(() => {
        setGameState(prev => {
          if (prev.timeLeft <= 1) {
            return { ...prev, timeLeft: 0, isPlaying: false, gameOver: true };
          }
          return { ...prev, timeLeft: prev.timeLeft - 1 };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState.isPlaying, gameState.isPaused, gameState.timeLeft]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startGame = useCallback(() => {
    const allElements = shuffleArray([...elements]);
    const totalSlots = computeTotalSlots();
    
    setGameState(prev => ({
      ...prev,
      isPlaying: true,
      isPaused: false,
      gameOver: false,
      gameWon: false,
      placedElements: new Map(),
      availableElements: allElements,
      timeLeft: INITIAL_TIME,
      requiredCount: totalSlots,
      score: 0,
    }));
  }, [computeTotalSlots]);

  const pauseGame = useCallback(() => {
    setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }));
  }, []);

  const shuffleElements = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      availableElements: shuffleArray(prev.availableElements),
    }));
  }, []);

  const restartGame = useCallback(() => {
    setGameState({
      score: 0,
      level: 1,
      timeLeft: INITIAL_TIME,
      isPlaying: false,
      isPaused: false,
      placedElements: new Map(),
      availableElements: [],
      gameOver: false,
      gameWon: false,
      requiredCount: 0,
    });
  }, []);

  const handleDragStart = (e: React.DragEvent, element: Element) => {
    setDraggedElement(element);
    e.dataTransfer.setData('text/plain', element.symbol);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent, group: number, period: number) => {
    e.preventDefault();
    setHighlightedSlot(`${group}-${period}`);
  };

  const handleDragLeave = () => {
    setHighlightedSlot(null);
  };

  const handleDrop = (e: React.DragEvent, group: number, period: number) => {
    e.preventDefault();
    setHighlightedSlot(null);

    if (!draggedElement) return;

    const correctElement = getElementByPosition(group, period);
    const isCorrect = correctElement && correctElement.symbol === draggedElement.symbol;

    if (isCorrect) {
      // Correct placement
      setGameState(prev => {
        const newPlacedElements = new Map(prev.placedElements);
        newPlacedElements.set(`${group}-${period}`, draggedElement);
        
        const newAvailableElements = prev.availableElements.filter(
          el => el.symbol !== draggedElement.symbol
        );

        const scorePercentage = Math.floor((newPlacedElements.size / prev.requiredCount) * 100);
        const isWon = newPlacedElements.size === prev.requiredCount;

        return {
          ...prev,
          score: scorePercentage,
          placedElements: newPlacedElements,
          availableElements: newAvailableElements,
          gameWon: isWon,
          isPlaying: !isWon,
        };
      });

      // Success animation
      const slot = document.querySelector(`[data-slot="${group}-${period}"]`);
      if (slot) {
        slot.classList.add('animate-pulse');
        setTimeout(() => slot.classList.remove('animate-pulse'), 1000);
      }
    } else {
      // Wrong placement - restart game
      const slot = document.querySelector(`[data-slot="${group}-${period}"]`);
      if (slot) {
        slot.classList.add('animate-bounce');
        setTimeout(() => {
          slot.classList.remove('animate-bounce');
          restartGame();
        }, 1000);
      }
    }

    setDraggedElement(null);
  };

  const handleLanthanideDrop = (e: React.DragEvent, atomicNumber: number) => {
    e.preventDefault();
    setHighlightedSlot(null);

    if (!draggedElement) return;

    const correctElement = elements.find(el => el.atomicNumber === atomicNumber);
    const isCorrect = correctElement && correctElement.symbol === draggedElement.symbol;

    if (isCorrect) {
      // Correct placement
      setGameState(prev => {
        const newPlacedElements = new Map(prev.placedElements);
        newPlacedElements.set(`lanthanide-${atomicNumber}`, draggedElement);
        
        const newAvailableElements = prev.availableElements.filter(
          el => el.symbol !== draggedElement.symbol
        );

        const scorePercentage = Math.floor((newPlacedElements.size / prev.requiredCount) * 100);
        const isWon = newPlacedElements.size === prev.requiredCount;

        return {
          ...prev,
          score: scorePercentage,
          placedElements: newPlacedElements,
          availableElements: newAvailableElements,
          gameWon: isWon,
          isPlaying: !isWon,
        };
      });

      // Success animation
      const slot = document.querySelector(`[data-slot="lanthanide-${atomicNumber}"]`);
      if (slot) {
        slot.classList.add('animate-pulse');
        setTimeout(() => slot.classList.remove('animate-pulse'), 1000);
      }
    } else {
      // Wrong placement - restart game
      const slot = document.querySelector(`[data-slot="lanthanide-${atomicNumber}"]`);
      if (slot) {
        slot.classList.add('animate-bounce');
        setTimeout(() => {
          slot.classList.remove('animate-bounce');
          restartGame();
        }, 1000);
      }
    }

    setDraggedElement(null);
  };

  const handleActinideDrop = (e: React.DragEvent, atomicNumber: number) => {
    e.preventDefault();
    setHighlightedSlot(null);

    if (!draggedElement) return;

    const correctElement = elements.find(el => el.atomicNumber === atomicNumber);
    const isCorrect = correctElement && correctElement.symbol === draggedElement.symbol;

    if (isCorrect) {
      // Correct placement
      setGameState(prev => {
        const newPlacedElements = new Map(prev.placedElements);
        newPlacedElements.set(`actinide-${atomicNumber}`, draggedElement);
        
        const newAvailableElements = prev.availableElements.filter(
          el => el.symbol !== draggedElement.symbol
        );

        const scorePercentage = Math.floor((newPlacedElements.size / prev.requiredCount) * 100);
        const isWon = newPlacedElements.size === prev.requiredCount;

        return {
          ...prev,
          score: scorePercentage,
          placedElements: newPlacedElements,
          availableElements: newAvailableElements,
          gameWon: isWon,
          isPlaying: !isWon,
        };
      });

      // Success animation
      const slot = document.querySelector(`[data-slot="actinide-${atomicNumber}"]`);
      if (slot) {
        slot.classList.add('animate-pulse');
        setTimeout(() => slot.classList.remove('animate-pulse'), 1000);
      }
    } else {
      // Wrong placement - restart game
      const slot = document.querySelector(`[data-slot="actinide-${atomicNumber}"]`);
      if (slot) {
        slot.classList.add('animate-bounce');
        setTimeout(() => {
          slot.classList.remove('animate-bounce');
          restartGame();
        }, 1000);
      }
    }

    setDraggedElement(null);
  };

  const renderPeriodicGrid = () => {
    const grid = [];
    
    // Main periodic table (7 periods, 18 groups)
    for (let period = 1; period <= 7; period++) {
      const row = [];
      for (let group = 1; group <= 18; group++) {
        const key = `${group}-${period}`;
        const placedElement = gameState.placedElements.get(key);
        const correctElement = getElementByPosition(group, period);
        
        // Skip empty positions in the periodic table
        if (!correctElement) {
          row.push(
            <div key={key} className="w-12 h-12"></div>
          );
          continue;
        }

        const isHighlighted = highlightedSlot === key;
        const categoryColor = categoryColors[correctElement.category];

        row.push(
          <div
            key={key}
            data-slot={key}
            className={`
              w-12 h-12 border-2 border-gray-600 rounded-md flex flex-col items-center justify-center
              text-xs font-bold cursor-pointer transition-all duration-200
              ${placedElement ? `${categoryColor} text-white` : 'bg-gray-800 hover:bg-gray-700'}
              ${isHighlighted ? 'ring-2 ring-blue-400 scale-105' : ''}
            `}
            onDragOver={handleDragOver}
            onDragEnter={(e) => handleDragEnter(e, group, period)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, group, period)}
          >
            {placedElement ? (
              <>
                <div className="text-sm font-bold">{placedElement.symbol}</div>
              </>
            ) : (
              <div className="text-gray-500">&nbsp;</div>
            )}
          </div>
        );
      }
      grid.push(
        <div key={period} className="flex gap-1 justify-center">
          {row}
        </div>
      );
    }

    // Lanthanides row
    const lanthanides = [];
    for (let i = 57; i <= 71; i++) {
      const element = elements.find(el => el.atomicNumber === i);
      if (element) {
        const key = `lanthanide-${i}`;
        const placedElement = gameState.placedElements.get(key);
        const isHighlighted = highlightedSlot === key;

        lanthanides.push(
          <div
            key={key}
            data-slot={key}
            className={`
              w-12 h-12 border-2 border-gray-600 rounded-md flex flex-col items-center justify-center
              text-xs font-bold cursor-pointer transition-all duration-200
              ${placedElement ? `${categoryColors.lanthanides} text-white` : 'bg-gray-800 hover:bg-gray-700'}
              ${isHighlighted ? 'ring-2 ring-blue-400 scale-105' : ''}
            `}
            onDragOver={handleDragOver}
            onDragEnter={(e) => {
              e.preventDefault();
              setHighlightedSlot(key);
            }}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleLanthanideDrop(e, i)}
          >
            {placedElement ? (
              <>
                <div className="text-xs">{placedElement.atomicNumber}</div>
                <div className="text-sm font-bold">{placedElement.symbol}</div>
              </>
            ) : (
              <div className="text-gray-500">{element.atomicNumber}</div>
            )}
          </div>
        );
      }
    }

    // Actinides row
    const actinides = [];
    for (let i = 89; i <= 103; i++) {
      const element = elements.find(el => el.atomicNumber === i);
      if (element) {
        const key = `actinide-${i}`;
        const placedElement = gameState.placedElements.get(key);
        const isHighlighted = highlightedSlot === key;

        actinides.push(
          <div
            key={key}
            data-slot={key}
            className={`
              w-12 h-12 border-2 border-gray-600 rounded-md flex flex-col items-center justify-center
              text-xs font-bold cursor-pointer transition-all duration-200
              ${placedElement ? `${categoryColors.actinides} text-white` : 'bg-gray-800 hover:bg-gray-700'}
              ${isHighlighted ? 'ring-2 ring-blue-400 scale-105' : ''}
            `}
            onDragOver={handleDragOver}
            onDragEnter={(e) => {
              e.preventDefault();
              setHighlightedSlot(key);
            }}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleActinideDrop(e, i)}
          >
            {placedElement ? (
              <>
                <div className="text-xs">{placedElement.atomicNumber}</div>
                <div className="text-sm font-bold">{placedElement.symbol}</div>
              </>
            ) : (
              <div className="text-gray-500">{element.atomicNumber}</div>
            )}
          </div>
        );
      }
    }

    return (
      <div className="flex flex-row items-start gap-8">
        <div className="flex flex-col gap-1">
          {grid}
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-1 justify-center">
              {lanthanides}
            </div>
            <div className="flex gap-1 justify-center">
              {actinides}
            </div>
          </div>
        </div>
        <div className="w-80">
          {renderElementsPool()}
        </div>
      </div>
    );
  };

  const renderElementsPool = () => {
    if (!gameState.isPlaying) return null;
    
    return (
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-bold mb-4 text-center">Elements Pool</h3>
        <div className="flex flex-wrap gap-2 justify-center max-h-96 overflow-y-auto">
          {gameState.availableElements.map((element) => (
            <div
              key={element.symbol}
              draggable
              onDragStart={(e) => handleDragStart(e, element)}
              className={`
                ${categoryColors[element.category]} text-white p-2 rounded-md cursor-move
                hover:scale-105 transition-transform duration-200 min-w-16 text-center
                shadow-lg hover:shadow-xl
              `}
            >
              <div className="text-xs">{element.atomicNumber}</div>
              <div className="text-sm font-bold">{element.symbol}</div>
              <div className="text-xs truncate">{element.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderLegend = () => {
    return (
      <div className="flex flex-wrap gap-2 justify-center text-xs">
        {Object.entries(categoryNames).map(([category, name]) => (
          <div key={category} className="flex items-center gap-1">
            <div className={`w-4 h-4 ${categoryColors[category as keyof typeof categoryColors]} rounded`}></div>
            <span>{name}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Periodic Puzzle 🧪⚗️⚛️</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-lg">Score: <span className="font-bold">{gameState.score}%</span></div>
          <div className="text-lg">Progress: <span className="font-bold">{gameState.placedElements.size}/{gameState.requiredCount}</span></div>
          <div className="text-lg">Time: <span className="font-bold">{formatTime(gameState.timeLeft)}</span></div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={startGame}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md font-semibold transition-colors"
          >
            Start
          </button>
          <button
            onClick={pauseGame}
            disabled={!gameState.isPlaying}
            className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 rounded-md font-semibold transition-colors"
          >
            {gameState.isPaused ? 'Resume' : 'Pause'}
          </button>
          <button
            onClick={shuffleElements}
            disabled={!gameState.isPlaying}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded-md font-semibold transition-colors"
          >
            Shuffle
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="mb-6">
        {renderLegend()}
      </div>

      {/* Game Grid */}
      <div className="mb-8">
        {renderPeriodicGrid()}
      </div>

      {/* Game Over Modal */}
      {(gameState.gameOver || gameState.gameWon) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              {gameState.gameWon ? '🎉 Congratulations!' : '⏰ Time\'s Up!'}
            </h2>
            <p className="text-lg mb-4">
              {gameState.gameWon 
                ? `You completed the entire periodic table with 100% accuracy!`
                : `Game Over! Your final score: ${gameState.score}% (${gameState.placedElements.size}/${gameState.requiredCount} elements placed)`
              }
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={restartGame}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition-colors"
              >
                Play Again
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!gameState.isPlaying && !gameState.gameOver && !gameState.gameWon && (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">How to Play</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Drag elements from the side pool to their correct positions in the periodic table. 
            Your score is calculated as a percentage of completion. Win by filling the entire 
            periodic table before time runs out! Be careful - placing an element in the wrong 
            position will restart the game.
          </p>
        </div>
      )}
    </div>
  );
}
