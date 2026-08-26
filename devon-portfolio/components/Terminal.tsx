"use client";

import { useState } from "react";
import { executeCommand } from "@/commands/parser";

const welcomeOutput = [
  "DEVON-OS v1.0.0                                      STATUS: ONLINE",
  "────────────────────────────────────────────────────────────────",
  "",
  "   ██████╗ ███████╗██╗   ██╗ ██████╗ ███╗   ██╗",
  "   ██╔══██╗██╔════╝██║   ██║██╔═══██╗████╗  ██║",
  "   ██║  ██║█████╗  ██║   ██║██║   ██║██╔██╗ ██║",
  "   ██║  ██║██╔══╝  ╚██╗ ██╔╝██║   ██║██║╚██╗██║",
  "   ██████╔╝███████╗ ╚████╔╝ ╚██████╔╝██║ ╚████║",
  "",
  "   NETWORK ENGINEER",
  "   Infrastructure • Automation • Monitoring",
  "",
  "────────────────────────────────────────────────────────────────",
  "",
  " Welcome to Devons Personal Terminal",
  "",
  " Type 'help' for available commands.",
  "",
];

export default function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>(welcomeOutput);

  const handleCommand = () => {
    if (!input.trim()) return;

    const result = executeCommand(input);

    if (result.includes("__CLEAR__")) {
      setOutput([]);
      setInput("");
      return;
    }

    setOutput((previous) => [
      ...previous,
      `Devons-Portfolio# ${input}`,
      ...result,
    ]);

    setInput("");
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleCommand();
    }
  };

  return (
    <div
      className="min-h-[75vh] cursor-text overflow-x-auto p-5 md:p-8"
      onClick={() =>
        document.getElementById("terminal-input")?.focus()
      }
    >
      <div className="font-mono text-xs leading-6 md:text-sm md:leading-7">
        {output.map((line, index) => (
          <div
            key={index}
            className="whitespace-pre"
          >
            {line || "\u00A0"}
          </div>
        ))}
      </div>

      <div className="mt-2 flex font-mono text-xs md:text-sm">
        <span className="mr-2 shrink-0 text-green-400">
          Devons-Portfolio#
        </span>

        <input
          id="terminal-input"
          autoFocus
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent text-[#d7dee7] outline-none"
          spellCheck={false}
          autoComplete="off"
        />
      </div>
    </div>
  );
}