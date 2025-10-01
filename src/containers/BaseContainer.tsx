"use client";

import { ReactNode } from "react";
import { IconHome2, IconLogout, IconUser } from "@tabler/icons-react";
import { Grid, GridCol, Stack, Tooltip, UnstyledButton } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { HeaderMobile } from "./HeaderMobile";
import classes from "./BaseContainer.module.css";

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

const mockdata = [{ icon: IconHome2, label: "Home" }];

export default function BaseContainer({ children }: { children: ReactNode }) {
  const links = mockdata.map((link, i) => (
    <NavbarLink {...link} key={link.label} />
  ));

  // Mantine's default theme breakpoint for 'sm' is 48em (768px)
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isMobile ? (
        <Stack gap={0}>
          <HeaderMobile />
          {children}
        </Stack>
      ) : (
        <Grid gutter={0}>
          <GridCol span={{ base: 0.5 }}>
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
          </GridCol>
          <GridCol
            span="auto"
            className={classes.background}
            style={{ flex: 1, minWidth: 0 }}
          >
            {children}
          </GridCol>
        </Grid>
      )}
    </>
  );
}
