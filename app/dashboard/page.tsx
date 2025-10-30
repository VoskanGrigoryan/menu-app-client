import FilterBar from "@/src/components/ui/FilterBar";
import RecipeCard from "@/src/components/ui/RecipeCard";
import { SimpleGrid } from "@mantine/core";

const DashboardView = () => {
  const arr = [...Array(50).keys()];

  return (
    <>
      <FilterBar />
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 5 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {arr.map((i) => {
          return (
            <div key={arr[i]}>
              <RecipeCard />
            </div>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default DashboardView;
