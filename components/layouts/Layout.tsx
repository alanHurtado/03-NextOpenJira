import { Box } from "@mui/material";
import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar, Sidebar } from "../ui";
interface Props {
  title?: string;
  children: ReactNode;
}
export const Layout: FC<Props> = ({ children, title = "OpenJira" }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Box sx={{ padding: "2vh 2vh" }}>{children}</Box>
    </Box>
  );
};
