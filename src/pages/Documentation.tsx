
import React from 'react';
import Header from '@/components/Header';
import { Shield, Database, User, Lock, Code, Globe, Eye } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <Header />
      
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <Eye className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-400 dark:to-amber-600 text-transparent bg-clip-text">
            Eye of Odin Documentation
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Complete technical documentation and implementation guide for the Eye of Odin digital footprint scanning system
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="apis">APIs</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6 animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Eye className="text-amber-500" />
                  Project Overview
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    The <strong>Eye of Odin</strong> is an OSINT (Open Source Intelligence) tool designed to scan and analyze public digital footprints, helping users understand their online exposure and take control of their digital privacy.
                  </p>
                  
                  <h3 className="text-xl font-medium mt-6 mb-2">Core Features</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Digital Footprint Scanning:</strong> Analyze usernames, email addresses, and names across public sources.</li>
                    <li><strong>Risk Assessment:</strong> Determine exposure level (low, medium, high) based on findings.</li>
                    <li><strong>Privacy Recommendations:</strong> Personalized guidance to improve online privacy.</li>
                    <li><strong>Scan History:</strong> Track previous scans and monitor changes over time.</li>
                    <li><strong>Enterprise Integration:</strong> Connect to organization databases for comprehensive security monitoring.</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6 mb-2">Technology Stack</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Frontend:</strong> React, TypeScript, Tailwind CSS, Shadcn UI</li>
                    <li><strong>Backend:</strong> Firebase (Authentication, Firestore, Cloud Functions)</li>
                    <li><strong>APIs:</strong> OSINT APIs, Data Breach Services</li>
                    <li><strong>Storage:</strong> Firestore, Google Cloud Storage</li>
                    <li><strong>Authentication:</strong> Firebase Authentication</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="frontend" className="space-y-6 animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Code className="text-amber-500" />
                  Frontend Architecture
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    The Eye of Odin frontend is built with React, TypeScript, and Tailwind CSS, using the Shadcn UI component library for a consistent and accessible user interface.
                  </p>
                  
                  <h3 className="text-xl font-medium mt-6 mb-2">Component Structure</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Layout Components:</strong> Header, Footer, Sidebar</li>
                    <li><strong>Scan Components:</strong> ScanForm, ScanResults, ResultsVisualization</li>
                    <li><strong>Authentication:</strong> Login, Register, ProfileManager</li>
                    <li><strong>Dashboard:</strong> UserDashboard, ScanHistory, ReportGenerator</li>
                    <li><strong>Utilities:</strong> ThemeProvider, ToastNotifications</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6 mb-2">State Management</h3>
                  <p>
                    The application uses React Query for server state management and context API for UI state:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>AuthContext:</strong> Manages user authentication state</li>
                    <li><strong>ThemeContext:</strong> Handles light/dark mode</li>
                    <li><strong>ScanContext:</strong> Manages active scan session</li>
                    <li><strong>React Query:</strong> Handles API requests and caching</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6 mb-2">Styling</h3>
                  <p>
                    Tailwind CSS is used for styling with a custom theme configuration that supports:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Light and dark mode with smooth transitions</li>
                    <li>Custom color palette centered around the amber/gold "Eye of Odin" theme</li>
                    <li>Responsive design for all screen sizes</li>
                    <li>Animation utilities for enhanced user experience</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="backend" className="space-y-6 animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Database className="text-amber-500" />
                  Backend Architecture
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    The Eye of Odin backend is built on Firebase to provide a scalable, secure infrastructure for handling user data, scans, and OSINT operations.
                  </p>
                  
                  <h3 className="text-xl font-medium mt-6 mb-2">Firebase Integration</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Authentication:</strong> Email/password, Google OAuth, and other providers</li>
                    <li><strong>Firestore:</strong> NoSQL database for storing user profiles and scan results</li>
                    <li><strong>Cloud Functions:</strong> Serverless functions for OSINT operations and data processing</li>
                    <li><strong>Security Rules:</strong> Granular access control for database and storage</li>
                    <li><strong>Cloud Storage:</strong> For storing reports and other generated documents</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6 mb-2">Database Schema</h3>
                  <p>The core collections in Firestore include:</p>
                  
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm overflow-auto my-4">
                    <pre>{`// users collection
{
  uid: string,           // Firebase auth user ID
  email: string,         // User email
  displayName: string,   // User display name
  createdAt: timestamp,  // Account creation date
  subscription: string,  // Free/Premium tier
  settings: {           
    notifications: boolean,
    privacyPreferences: object
  }
}

// scans collection
{
  id: string,            // Scan ID
  userId: string,        // Reference to user
  input: string,         // Scan input (username, email, etc)
  inputType: string,     // Type of scan (username, email, name)
  timestamp: timestamp,  // When scan was performed
  exposureLevel: string, // low, medium, high
  sources: array,        // List of sources where data was found
  findings: array,       // Detailed findings from each source
  report: string         // URL to generated report (optional)
}

// apiKeys collection
{
  userId: string,        // Reference to user
  service: string,       // API service name
  key: string,           // Encrypted API key
  createdAt: timestamp,  // When key was added
  lastUsed: timestamp    // Last usage timestamp
}`}</pre>
                  </div>
                  
                  <h3 className="text-xl font-medium mt-6 mb-2">Google Workspace Integration</h3>
                  <p>
                    For enterprise deployments, Eye of Odin can integrate with Google Workspace:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Single Sign-On via Google Workspace accounts</li>
                    <li>Admin Console for managing user access</li>
                    <li>Integration with Google Drive for report storage and sharing</li>
                    <li>User directory synchronization</li>
                    <li>Scheduled scans and reporting via Google Cloud Scheduler</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="apis" className="space-y-6 animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Globe className="text-amber-500" />
                  API Architecture
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    The Eye of Odin integrates with multiple OSINT APIs and provides its own API endpoints for integration with other systems.
                  </p>
                  
                  <h3 className="text-xl font-medium mt-6 mb-2">External API Integrations</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>HaveIBeenPwned:</strong> Check email addresses against known data breaches</li>
                    <li><strong>Social Media APIs:</strong> Check username availability and profile data</li>
                    <li><strong>Search Engine APIs:</strong> Search for public mentions and content</li>
                    <li><strong>Public Records APIs:</strong> Search public databases for personal information</li>
                    <li><strong>Domain Registry APIs:</strong> Lookup domain ownership information</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium mt-6 mb-2">API Implementation</h3>
                  <p>
                    Internal APIs are implemented using Firebase Cloud Functions:
                  </p>
                  
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm overflow-auto my-4">
                    <pre>{`// Example Cloud Function implementation
exports.scanUsername = functions.https.onCall(async (data, context) => {
  // Authenticate request
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Authentication required');
  }
  
  const { username } = data;
  if (!username) {
    throw new functions.https.HttpsError('invalid-argument', 'Username required');
  }
  
  // Call multiple OSINT sources in parallel
  const [twitterResult, githubResult, redditResult] = await Promise.all([
    checkTwitter(username),
    checkGithub(username),
    checkReddit(username)
  ]);
  
  // Aggregate and analyze results
  const findings = [...twitterResult.findings, ...githubResult.findings, ...redditResult.findings];
  const sources = [...new Set(findings.map(finding => finding.source))];
  
  // Determine exposure level based on findings
  const exposureLevel = calculateExposureLevel(findings);
  
  // Save scan results to database
  const scanRef = await admin.firestore().collection('scans').add({
    userId: context.auth.uid,
    input: username,
    inputType: 'handle',
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
    exposureLevel,
    sources,
    findings
  });
  
  // Return results to client
  return {
    id: scanRef.id,
    input: username,
    inputType: 'handle',
    exposureLevel,
    sources,
    findings
  };
});`}</pre>
                  </div>
                  
                  <h3 className="text-xl font-medium mt-6 mb-2">API Security</h3>
                  <p>API security is implemented through multiple layers:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Firebase Authentication for user identity verification</li>
                    <li>API key management for third-party services</li>
                    <li>Rate limiting to prevent abuse</li>
                    <li>Data validation and sanitization</li>
                    <li>HTTPS encryption for all API communication</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="visual-assets" className="space-y-6 animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Eye className="text-amber-500" />
                  Visual Assets
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    The visual design of Eye of Odin incorporates Norse mythological themes, particularly focusing on Odin, to create a distinct and memorable user experience. Key visual assets are planned to enhance the application's aesthetic and convey its purpose effectively.
                  </p>

                  <h3 className="text-xl font-medium mt-6 mb-2">Essential Visuals</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Loading Screen Illustration:</strong> A Nordic-style swirling vortex with runes, symbolizing data gathering.
                    </li>
                    <li>
                      <strong>Dashboard Banner:</strong> Sleek, cyber-enhanced Odin's raven, overlooking digital landscapes.
                    </li>
                    <li>
                      <strong>Icon Set:</strong> Minimalist icons representing privacy, security, open-source research, and data visibility.
                    </li>
                    <li>
                      <strong>Threat Report Visual:</strong> Stylized Norse shield cracked by digital forces, representing vulnerabilities.
                    </li>
                    <li>
                      <strong>404 Error Page Art:</strong> Odin’s raven searching the web, symbolizing lost data paths.
                    </li>
                    <li>
                      <strong>Login & Authentication Graphic:</strong> A secure vault door with Norse carvings, emphasizing security.
                    </li>
                    <li>
                      <strong>Dark Mode vs. Light Mode UI Accent:</strong> Subtle symbolic contrast between Odin’s wisdom and modern AI.
                    </li>
                    <li>
                      <strong>Success & Warning Icons:</strong> Cyber-runes illuminating with green (success) & red (warning) colors.
                    </li>
                    <li>
                      <strong>Footer Decorative Badge:</strong> Odin’s spear (Gungnir) merging with a digital network.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="implementation" className="space-y-6 animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="text-amber-500" />
                  Implementation Guide
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    This guide outlines the steps to fully implement the Eye of Odin system with Firebase and Google Workspace integration.
                  </p>
                  
                  <h3 className="text-xl font-medium mt-6 mb-2">Firebase Setup</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a new Firebase project in the Firebase Console</li>
                    <li>Enable Authentication with desired providers (Email/Password, Google, etc.)</li>
                    <li>Create a Firestore database with appropriate security rules</li>
                    <li>Set up Cloud Storage for report storage</li>
                    <li>Initialize Firebase in your React application</li>
                  </ol>
                  
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm overflow-auto my-4">
                    <pre>{`// src/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);`}</pre>
                  </div>
                  
                  <h3 className="text-xl font-medium mt-6 mb-2">Google Workspace Integration</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Set up a Google Cloud project linked to your Google Workspace</li>
                    <li>Enable the Admin SDK and Directory API</li>
                    <li>Create service account credentials with appropriate scopes</li>
                    <li>Implement domain-wide delegation for the service account</li>
                    <li>Use the Google API client library to interact with Workspace services</li>
                  </ol>
                  
                  <h3 className="text-xl font-medium mt-6 mb-2">OSINT API Integration</h3>
                  <p>Set up Cloud Functions to interact with OSINT APIs:</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Register for API keys with desired OSINT services</li>
                    <li>Store API keys securely in Firebase environment configuration</li>
                    <li>Create Cloud Functions for each type of scan (username, email, name)</li>
                    <li>Implement rate limiting and error handling</li>
                    <li>Set up scheduled scans for premium users</li>
                  </ol>
                  
                  <h3 className="text-xl font-medium mt-6 mb-2">Frontend Implementation</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Set up Authentication UI components (Login, Register, Profile)</li>
                    <li>Create Dashboard views for scan history and user settings</li>
                    <li>Implement the scan form and results visualization</li>
                    <li>Add user preference management</li>
                    <li>Set up report generation and export functionality</li>
                  </ol>
                  
                  <h3 className="text-xl font-medium mt-6 mb-2">Deployment</h3>
                  <p>Deploy the application using Firebase Hosting:</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Build the React application for production</li>
                    <li>Configure Firebase Hosting settings</li>
                    <li>Deploy Cloud Functions</li>
                    <li>Set up continuous deployment with GitHub Actions</li>
                    <li>Configure custom domain and SSL certificate</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Lock className="w-10 h-10 text-amber-500" />
          </div>
          <h3 className="text-2xl font-semibold text-center mb-4">Privacy and Security Commitment</h3>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-center">
            The Eye of Odin is designed with privacy and security as core principles. All user data is encrypted, API keys are stored securely, 
            and we adhere to best practices for data retention and protection. Our goal is to help users understand and control their digital 
            footprint, not to contribute to privacy concerns.
          </p>
        </div>
      </div>
      
      <footer className="py-6 px-4 text-center text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 mt-auto">
        <p>© 2025 Eye of Odin - See All, Know All, Secure All</p>
      </footer>
    </div>
  );
};

export default Documentation;
