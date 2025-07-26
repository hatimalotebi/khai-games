@@ .. @@
   const products = [
     {
-      title: "NABTU: The Forgotten Kingdom",
+      title: "Forgotten Kingdom",
       subtitle: "Epic Arabian Adventure",
       description: "An epic adventure through ancient Arabian civilizations that takes you on a stunning exploratory journey through Saudi Arabia's rich history and heritage. Experience the forgotten kingdom like never before.",
@@ .. @@
                 {/* Enhanced Video Section with Poster */}
                 <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
                   <video
-                    className="w-full h-full object-cover"
+                    className="w-full h-full object-cover md:object-cover object-contain"
                     autoPlay
                     muted
                     loop
@@ .. @@
                   {/* Enhanced Video Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                   
-                  {/* Enhanced Play Button */}
-                  <div className="absolute inset-0 flex items-center justify-center">
-                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300 cursor-pointer border border-white/30 hover:scale-110">
-                      <PlayIcon className="w-16 h-16 text-white" />
-                    </div>
-                  </div>
-                  
                   {/* Enhanced Status Badges */}
                   <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/30">
                     AVAILABLE NOW