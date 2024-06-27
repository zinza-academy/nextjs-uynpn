// "use client";
// import { Typography } from "@mui/material";
// import "./styles.css";
// import Link from "next/link";
 
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// const navLinks = [
//   { name: "HomePage", href: "/homepage" },
// ];

// export default function Dashboard({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const [input, setInput] = useState("");

//   return (
//     <div>
//       <div>
//         <input value={input} onChange={(e) => setInput(e.target.value)} />
//       </div>
//       {navLinks.map((link) => {
//         const isActive = pathname.startsWith(link.href);

//         return (
//           <Link
//             className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
//             href={link.href}
//             key={link.name}
//           >
//             {link.name}
//           </Link>
//         );
//       })}
//       {children}
//     </div>
//   );
// }