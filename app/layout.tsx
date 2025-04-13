/* "use client"; */

import React from "react";
import { Amplify } from "aws-amplify";
import { Inter } from "next/font/google";
import "./app.css";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>      
        {children}
      </body>
    </html>
  );
}
