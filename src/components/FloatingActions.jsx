import React from 'react';

export default function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick contact">
      <a
        className="float-btn zalo"
        href="https://zalo.me/0964489447"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zalo
      </a>
      <a
        className="float-btn msg"
        href="https://m.me/61576606656783"
        target="_blank"
        rel="noopener noreferrer"
      >
        Messenger
      </a>
    </div>
  );
}
