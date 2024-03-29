"use client";

import {
  UserGroupIcon,
  PaperClipIcon,
  HomeIcon,
  UserPlusIcon,
  GlobeEuropeAfricaIcon,
  ListBulletIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  { name: "Inquiries", href: "/dashboard/inquiries", icon: BanknotesIcon },
  { name: "Tasks", href: "/dashboard/tasks", icon: ListBulletIcon },
  { name: "Map", href: "/dashboard/map", icon: GlobeEuropeAfricaIcon },
  { name: "Leads", href: "/dashboard/leads", icon: UserPlusIcon },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: PaperClipIcon,
  },
];

export default function NavLinks() {
  const pathName = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-violet-300 md:flex-none md:justify-start md:p-2 md:px-3",
              { "bg-violet-300 text-violet-600": pathName === link.href }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
