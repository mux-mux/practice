import { Chapter, Section } from '@/components/MasterDetail';
import { RouterPath } from '@/config/RouterPath';

export function RoutingSection() {
    return (
        <Section title="Routing">
            <Chapter emoji="🛤️" title="Dynamic Routes" path={RouterPath.DYNAMIC_ROUTES} />
        </Section>
    );
}
