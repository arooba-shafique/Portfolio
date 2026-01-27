import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm text-center md:text-left">
          © {new Date().getFullYear()} Arooba. All rights reserved.
        </p>
        
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>Designed & Built with</span>
          <Heart className="h-4 w-4 text-red-500 fill-red-500 mx-1" />
          <span>by Arooba</span>
        </div>
      </div>
    </footer>
  );
}
