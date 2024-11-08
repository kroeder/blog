import { Meta, StoryObj } from '@storybook/angular';
import { AppComponent } from '../app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from '../app.routes';

const meta: Meta = {
  component: AppComponent,
  args: {},
};

export default meta;
type Story = StoryObj;

export const MissingProvider: Story = {};

export const ProvideRouter: Story = {
  render: () => ({
    applicationConfig: {
      providers: [provideRouter(appRoutes)],
    },
  }),
};
