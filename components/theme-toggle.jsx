"use client"
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle(){
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);
    useEffect(()=>{
        setMounted(true);
        const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
        const initialDark = stored ? stored === 'dark' : (typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false);
        document.documentElement.classList.toggle('dark', initialDark);
        setIsDark(initialDark);
    },[]);
    if(!mounted) return null;
    const toggle = () => {
        const next = !isDark;
        document.documentElement.classList.toggle('dark', next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
        setIsDark(next);
    };
    return (
        <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggle}>
            {isDark ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
        </Button>
    );
}

