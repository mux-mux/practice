import { Flex, Button, TextField } from '@radix-ui/themes';

export function ToDo() {
    return (
        <Flex justify="center" gap="2">
            <TextField.Root placeholder="Add a task…" />
            <Button>Add</Button>
        </Flex>
    );
}
