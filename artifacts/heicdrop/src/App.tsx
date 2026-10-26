import { Toaster } from '@/components/ui/toast/toaster';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Home } from '@/pages/Home';
import { Privacy } from '@/pages/Privacy';
import { Contact } from '@/pages/Contact';
import { About } from '@/pages/About';
import { Terms } from '@/pages/Terms';
import { ThemeProvider } from '@/context/ThemeContext';
import { useMemo } from 'react';
import type { BaseLocationHook } from 'wouter';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/contact" component={Contact} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App({ staticPath }: { staticPath?: string } = {}) {
  const staticLocationHook = useMemo<BaseLocationHook | undefined>(() => {
    if (!staticPath) return undefined;

    return () => [staticPath, () => {}];
  }, [staticPath]);

  return (
    <ThemeProvider>
      <WouterRouter
        base={import.meta.env.BASE_URL.replace(/\/$/, '')}
        hook={staticLocationHook}
      >
        <Router />
        <Toaster />
      </WouterRouter>
    </ThemeProvider>
  );
}

export default App;
