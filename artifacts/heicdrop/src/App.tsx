import { Toaster } from '@/components/ui/toast/toaster';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Home } from '@/pages/Home';
import { Privacy } from '@/pages/Privacy';
import { Contact } from '@/pages/Contact';
import { About } from '@/pages/About';
import { ThemeProvider } from '@/context/ThemeContext';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
        <Toaster />
      </WouterRouter>
    </ThemeProvider>
  );
}

export default App;
