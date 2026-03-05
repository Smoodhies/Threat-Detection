"use client";

import { useState } from "react";
import FileUploader from "@/components/FileUploader";
import ScanResults from "@/components/ScanResults";

export default function Home() {
  const [currentScanId, setCurrentScanId] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleScanComplete = (scanId: string) => {
    setCurrentScanId(scanId);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Threat Detection System
          </h1>
          <p className="text-lg text-gray-600">
            Powered by VirusTotal & Gemini AI
          </p>
        </header>

        <div className="space-y-8">
          {/* File Uploader */}
          <FileUploader onScanComplete={handleScanComplete} />

          {/* Scan Results */}
          {currentScanId && showResults && (
            <ScanResults scanId={currentScanId} />
          )}
        </div>
      </div>
    </div>
  );
}
