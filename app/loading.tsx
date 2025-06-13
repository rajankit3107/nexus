import { Container, Flex, Skeleton, Text } from "@radix-ui/themes";
import React from "react";

const loading = () => {
  return (
    <div className="w-full min-h-screen">
      <Container size="4" className="px-4 h-full">
        <Flex direction="column" gap="3" className="w-full h-full">
          <Text className="w-full">
            <Skeleton className="w-full h-32">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque felis tellus, efficitur id convallis a, viverra eget
              libero. Nam magna erat, fringilla sed commodo sed, aliquet nec
              magna.
            </Skeleton>
          </Text>

          <Skeleton className="w-full h-32">
            <Text className="w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque felis tellus, efficitur id convallis a, viverra eget
              libero. Nam magna erat, fringilla sed commodo sed, aliquet nec
              magna.
            </Text>
          </Skeleton>

          <Skeleton className="w-full h-32">
            <Text className="w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque felis tellus, efficitur id convallis a, viverra eget
              libero. Nam magna erat, fringilla sed commodo sed, aliquet nec
              magna.
            </Text>
          </Skeleton>
        </Flex>
      </Container>
    </div>
  );
};

export default loading;
