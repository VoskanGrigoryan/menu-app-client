"use client";

import { Paper, useMantineTheme } from "@mantine/core";
import FilterForm from "../forms/FilterForm";

const FilterBar = () => {
  const theme = useMantineTheme();

  return (
    <Paper
      shadow="sm"
      radius="md"
      withBorder
      p="xl"
      style={{
        backgroundColor: theme.colors.dark[6],
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      <FilterForm />
    </Paper>
  );
};

export default FilterBar;
