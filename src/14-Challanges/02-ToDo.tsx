import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export type Tasks = {
    id: string;
    name: string | null;
    completed: boolean;
};

export function ToDo() {
    const [tasks] = useState<Tasks[]>([]);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl text-center">Todo App</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-2">
                            <Input placeholder="Type a task name" />
                            <Button variant="outline">Add</Button>
                        </div>
                        <div className="space-y-2">
                            {tasks.length > 0 ? (
                                tasks?.map((task) => (
                                    <ul key={task.id}>
                                        <li>{task.name}</li>
                                    </ul>
                                ))
                            ) : (
                                <p className="text-center text-gray-500 py-4">
                                    No tasks yet. Add one above!
                                </p>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
