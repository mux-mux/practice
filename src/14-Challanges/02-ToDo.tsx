import { v4 as uuidv4 } from 'uuid';
import { FormEvent, MouseEvent, useState } from 'react';
import { Flex, Button, TextField, Heading } from '@radix-ui/themes';

type Tasks = {
    id: string;
    name: string | null;
    completed: boolean;
};

export function ToDo() {
    const [taskName, setTaskName] = useState<string | null | undefined>('');
    const [tasks, setTasks] = useState<Tasks[]>(() =>
        JSON.parse(localStorage.getItem('items') ?? '[]'),
    );
    const handleSubmit = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (taskName?.trim() === '') return;

        const nextTask = {
            id: uuidv4(),
            name: taskName ?? '',
            completed: false,
        };
        setTasks([...tasks, nextTask]);
        localStorage.setItem('items', JSON.stringify([...tasks, nextTask]));
        setTaskName('');
    };

    const toggleTask = (id: string) => {
        const newTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task,
        );
        setTasks(newTasks);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Flex justify="center" align="center" gap="2" mt="4">
                <TextField.Root
                    placeholder="Add a task…"
                    value={taskName ?? ''}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <Button onClick={handleSubmit}>Add</Button>
            </Flex>
            <Heading as="h2" align="center" mt="4">
                Tasks
            </Heading>
            <Flex direction="column" align="center">
                <ul>
                    {tasks?.map(({ id, name, completed }) => {
                        const completedStyle = completed ? { textDecoration: 'line-through' } : {};

                        return (
                            <li key={id} onClick={() => toggleTask(id)} style={completedStyle}>
                                {name}
                            </li>
                        );
                    })}
                </ul>
            </Flex>
        </form>
    );
}
