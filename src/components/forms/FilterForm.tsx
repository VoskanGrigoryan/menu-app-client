"use client";

import { useState } from "react";
import { Group, MultiSelect, Select, Text } from "@mantine/core";

const formatSelected = (values: string[]) => {
  if (values.length === 0) return "Ninguno seleccionado";
  const shown = values.slice(0, 2).join(", ");
  const remaining = values.length > 2 ? ` +${values.length - 2} más` : "";
  return shown + remaining;
};

const FilterForm = () => {
  const [meat, setMeat] = useState<string[]>([]);
  const [time, setTime] = useState<string[]>([]);
  const [include, setInclude] = useState<string[]>([]);
  const [exclude, setExclude] = useState<string[]>([]);
  const [spicy, setSpicy] = useState<string | null>(null);

  return (
    <div>
      <Group align="flex-start">
        <div>
          <MultiSelect
            label="Seleccioná el tipo de carne"
            placeholder="Qué tipo de animal es"
            data={["Res", "Cerdo", "Pescado", "Pollo", "Cordero", "Otro"]}
            hidePickedOptions
            clearable
            value={meat}
            onChange={setMeat}
            comboboxProps={{
              transitionProps: { transition: "pop", duration: 200 },
            }}
          />
          <Text size="sm" c="dimmed">
            {formatSelected(meat)}
          </Text>
        </div>

        <div>
          <MultiSelect
            label="Tiempo de cocción"
            placeholder="Cuánto tarda en cocinarse"
            data={["Rápido", "Mediano", "Largo"]}
            hidePickedOptions
            clearable
            value={time}
            onChange={setTime}
            comboboxProps={{
              transitionProps: { transition: "pop", duration: 200 },
            }}
          />
          <Text size="sm" c="dimmed">
            {formatSelected(time)}
          </Text>
        </div>

        <Select
          label="¿Picante?"
          placeholder="No"
          data={["No", "Un poco", "Picante", "Muy picante"]}
          clearable
          value={spicy}
          onChange={setSpicy}
          comboboxProps={{
            transitionProps: { transition: "pop", duration: 200 },
          }}
        />

        <div>
          <MultiSelect
            label="Ingredientes a incluir"
            placeholder="Ingredientes que lleva el plato"
            data={[
              "P negra",
              "P blanca",
              "Cúrcuma",
              "Comino",
              "Sal",
              "Mostaza",
              "Miel",
              "Salsa de ostras",
              "Salsa blanca",
            ]}
            searchable
            maxDropdownHeight={200}
            clearable
            value={include}
            onChange={setInclude}
            comboboxProps={{
              transitionProps: { transition: "pop", duration: 200 },
            }}
          />
          <Text size="sm" c="dimmed">
            {formatSelected(include)}
          </Text>
        </div>

        <div>
          <MultiSelect
            label="Ingredientes a excluir"
            placeholder="Ingredientes que NO lleva el plato"
            data={["Rápido", "Mediano", "Largo"]}
            hidePickedOptions
            clearable
            value={exclude}
            onChange={setExclude}
            comboboxProps={{
              transitionProps: { transition: "pop", duration: 200 },
            }}
          />
          <Text size="sm" c="dimmed">
            {formatSelected(exclude)}
          </Text>
        </div>
      </Group>
    </div>
  );
};

export default FilterForm;
