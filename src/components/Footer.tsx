import Link from "next/link";
import { Github, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold text-foreground">
              TailwindFX
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-[200px]">
              Curated Tailwind CSS effects for your next project.
            </p>
            {/* <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/yourusername/tailwindfx"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/yourchannel"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </a>
            </div> */}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              References
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="https://ui.ibelick.com/"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  ui.ibelick.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://ui-snippets.dev/"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  ui-snippets.dev
                </Link>
              </li>
              <li>
                <Link
                  href="https://snippets.alexandru.so/"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  snippets.alexandru.so
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {/* <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul> */}
          </div>
          <div>
            {/* <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/license"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  License
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground xl:text-center">
            © {new Date().getFullYear()} TailwindFX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
