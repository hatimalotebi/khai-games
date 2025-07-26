@@ .. @@
 const IntroVideo: React.FC<IntroVideoProps> = ({ onVideoEnd, gameAudio }) => {
   const videoRef = useRef<HTMLVideoElement>(null);
 
@@ .. @@
   return (
-    <section id="home" className="relative h-screen bg-black overflow-hidden">
+    <section id="home" className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
       <video
         ref={videoRef}
-        className="w-full h-full object-cover"
+        className="w-full h-full object-cover md:object-cover object-contain"
         controls={false}
         playsInline
       >
@@ .. @@
       </video>
       
       {/* Scroll indicator */}
-      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
+      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
         <p className="text-sm opacity-75 mb-2">Scroll down to explore more</p>
         <div className="w-6 h-10 border-2 border-white rounded-full mx-auto">
           <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-pulse"></div>