import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

type ErrorProps = { title: string | null; error: string | null };

export function ErrorPage({ title, error }: ErrorProps) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card className="w-full max-w-md">
                <CardTitle>Error loading {title}</CardTitle>

                <CardContent>
                    <p className="text-destructive">{error}</p>
                    <Button
                        onClick={() => window.location.reload()}
                        className="mt-4"
                        variant="outline"
                    >
                        Try again
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
