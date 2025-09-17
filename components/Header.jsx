import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard , PenBox} from "lucide-react";
import { checkUser } from "@/lib/checkUser";
import ThemeToggle from "./theme-toggle";

const Header = async () => {
    
    await checkUser();

    return (
        <header className="fixed top-0 w-full bg-background/70 backdrop-blur-md z-50 border-b">
            <nav className="container mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between p-4">
                <Link href="/">
                    <Image src={"/logo.png"} alt="mintflow-logo" height={500} width={500} className="h-10 w-auto object-contain block dark:hidden" />
                    <Image src={"/logo2.png"} alt="mintflow-logo" height={500} width={500} className="h-10 w-auto object-contain hidden dark:block " />

                </Link>

                <div className="flex items-center space-x-2 md:space-x-4">
                    <SignedIn>
                        <Link
                            href="/dashboard"
                        >
                            <Button variant="outline" className="flex items-center ">
                                <LayoutDashboard size={18} />
                                <span className="hidden md:inline">Dashboard</span>
                            </Button>
                        </Link>
                        <a href="/transaction/create">
                            <Button className="flex items-center gap-2">
                                <PenBox size={18} />
                                <span className="hidden md:inline">New Transaction</span>
                            </Button>
                        </a>
                    </SignedIn>

                        <SignedOut>
                            <SignInButton forceRedirectUrl="/dashboard" >
                                <Button variant="outline">Sign in</Button>
                            </SignInButton >
                        </SignedOut>
                        <ThemeToggle />
                        <SignedIn>
                            <UserButton
                                appearance={{
                                    elements: {
                                        avatarBox: "w-10 h-10",
                                    },
                                }}
                            />
                        </SignedIn>
                </div>
            </nav>
        </header>
    )
}

export default Header