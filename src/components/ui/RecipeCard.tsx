"use client";

import { Card, Text, Badge, Group } from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";
import { useState } from "react";

export default function RecipeCard() {
  const [isFav, setIsFav] = useState(false);
  return (
    <Card
      shadow="sm"
      padding="md"
      radius="md"
      withBorder
      style={{ minHeight: "120px", maxHeight: "200px", cursor: "pointer" }}
    >
      <Group justify="space-between" mt="0" mb="0">
        <Text fw={700}>Costillar de cerdo marinado</Text>
        <Badge
          color="gray"
          size="md"
          style={{ padding: 4, paddingBottom: 0, margin: 0, cursor: "pointer" }}
          onClick={() => {
            setIsFav(!isFav);
          }}
        >
          <IconHeart
            height={16}
            color={isFav ? "red" : "gray"}
            fill={isFav ? "red" : ""}
          />
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Cerdo marinado con miel, mostaza, etc. Cocinado al horno a fuego lento.
      </Text>
    </Card>
  );
}
