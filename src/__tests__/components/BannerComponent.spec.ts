import { vi } from 'vitest';
import { fakerPT_BR as faker } from '@faker-js/faker';
import { render } from '@/utils/test-utils';

import { BannerComponent, BannerComponentProps } from '@/components';

let dataTestId: string;

describe('BannerComponent', () => {
  beforeEach(() => {
    dataTestId = faker.lorem.slug(3);
  });

  it('shoud be able render component', () => {
    const container = render<BannerComponentProps>(BannerComponent, {
      props: {
        dataTestId,
      },
    });

    const sut = container.getByTestId(dataTestId);

    expect(sut).toBeDefined();
  });

  it('shoud be able get component without pass dataTestId', () => {
    const container = render<BannerComponentProps>(BannerComponent);

    const sut = container.getByTestId('banner-component');

    expect(sut).toBeDefined();
  });

  it('shoud be able change banner image', async () => {
    vi.useFakeTimers();
    const container = render<BannerComponentProps>(BannerComponent, {
      props: {
        dataTestId,
      },
    });

    const sut1 = container.getByTestId(`${dataTestId}-banner-1`);
    expect(sut1).toBeDefined();
    vi.advanceTimersToNextTimer();

    vi.useRealTimers();
    await new Promise<void>(resolve => setTimeout(resolve, 500));

    const sut2 = container.getByTestId(`${dataTestId}-banner-2`);
    expect(sut2).toBeDefined();
  });
});
