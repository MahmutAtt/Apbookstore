import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle ,DarkThemeToggle, Footer, FooterCopyright ,FooterLink, FooterLinkGroup } from "flowbite-react";
//menu olusturduk

export function DefaultHeader() {
    return (
        <Navbar>
            <NavbarBrand as={Link} href="https://flowbite-react.com">
              
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Book store</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="/" active>Home</NavbarLink>
                <NavbarLink as={Link} href="/about">About</NavbarLink>
                <NavbarLink href="services">Services</NavbarLink>
                <NavbarLink href="#">Pricing</NavbarLink>
                <NavbarLink href="#">Contact

                    
                </NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle />

        </Navbar>
    );
}








export function DefaultFooter() {
  return (
    <div className="w-full bg-gray-800 text-white py-4">
      <div className="mx-auto max-w-screen-lg px-4">
        <Footer container className="rounded-none">
          <FooterCopyright href="#" by="Book Store™" year={2024} />
          <FooterLinkGroup className="flex justify-center space-x-4 mt-2">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </Footer>
      </div>
    </div>
  );
}

  



