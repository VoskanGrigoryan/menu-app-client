import { Box, Burger, Divider, Drawer, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderMobile.module.css";

export function HeaderMobile() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box>
      <header className={classes.header}>
        <Group h="100%">
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Divider />
        <a href="#" className={classes.link}>
          Home
        </a>

        <a href="#" className={classes.link}>
          Profile
        </a>
        <a href="#" className={classes.link}>
          Logout
        </a>
      </Drawer>
    </Box>
  );
}
