"use client"
import React from 'react';
import MediaPlayer from '@/components/MediaPlayer';
import Suggestion from '@/components/Suggestion';
import Button from '@/components/Button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1>Welcome to My App</h1>
          <Button />
        </div>
        <div>
        <MediaPlayer />
        </div>

    </main>
  );
}