"use client";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      onClick={handleCopy}
      className="bg-black/40 border border-white/10 rounded-xl p-3 mb-4 flex justify-between items-center cursor-pointer hover:border-brand-500/50 transition-colors"
      title="点击复制"
    >
      <code className="text-brand-300 font-mono text-lg font-bold select-all">{text}</code>
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
    </div>
  );
}
