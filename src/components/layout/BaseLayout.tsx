"use client";

import { AppShell, Stack, Tooltip, UnstyledButton } from "@mantine/core";
import { ReactNode, useState } from "react";
import { IconHome2, IconLogout, IconUser } from "@tabler/icons-react";
import classes from "./Layout.module.css";
interface Props {
  children: ReactNode;
}

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon size={20} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

export function BaseLayout({ children }: Props) {
  const [active, setActive] = useState(2);

  const mockdata = [{ icon: IconHome2, label: "Home" }];

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <AppShell
      withBorder={false}
      padding="md"
      navbar={{
        width: { base: 80, md: 80, lg: 80 },
        breakpoint: "lg",
      }}
    >
      <AppShell.Navbar c={"cyan"} visibleFrom="sm" p="0px">
        <nav className={classes.navbar}>
          <div className={classes.navbarMain}>
            <Stack justify="center" gap={0}>
              {links}
            </Stack>
          </div>

          <Stack justify="center" gap={0}>
            <NavbarLink icon={IconUser} label="Change account" />
            <NavbarLink icon={IconLogout} label="Logout" />
          </Stack>
        </nav>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
