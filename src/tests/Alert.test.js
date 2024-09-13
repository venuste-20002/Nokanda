
import { render} from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Alert from '../components/Alert.svelte';


describe('Alert Component', () => {
  it('should not display for unknown alert types', () => {
    const { container } = render(Alert, {
      props: { type: 'invalid' }
    });
    expect(container.querySelector('div')).not.toBeInTheDocument();
  });
});
