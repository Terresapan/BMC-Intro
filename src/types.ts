
import React from 'react';

export interface Agent {
  name: string;
  role: string;
  description: string;
  icon: string;
  color: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Persona {
  title: string;
  description: string;
  needs: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface QAItem {
  question: string;
  answer: string;
  icon: React.ComponentType<any>;
}
