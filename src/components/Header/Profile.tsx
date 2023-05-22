import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Lucas Lima</Text>
        <Text color="gray.300" fontSize="small">
          lucasrafael123araujolima@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Lucas Lima"
        src="https://github.com/LucasRafa13.png"
      />
    </Flex>
  )
}
