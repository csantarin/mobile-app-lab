import { NavigationActions, NavigationContainerComponent, NavigationParams, NavigationState, NavigationStateRoute, StackActions } from 'react-navigation';

class NavigationServiceHelpers {
  public static getCurrentRouteNameRecursively(navigationState: NavigationState | null): string | null {
    if (!navigationState || !navigationState.routes) {
      return null;
    }
    const route = navigationState.routes[navigationState.index] as NavigationStateRoute<NavigationParams>;
  
    if (route.routes) {
      return NavigationServiceHelpers.getCurrentRouteNameRecursively(route);
    }

    return route.routeName;
  }

  public static getCurrentRouteKeyRecursively(navigationState: NavigationState | null): string | null {
    if (!navigationState) {
      return null;
    }

    const route = navigationState.routes[navigationState.index] as NavigationStateRoute<NavigationParams>;

    if (route.routes) {
      return NavigationServiceHelpers.getCurrentRouteKeyRecursively(route);
    }

    return route.key;
  }
}

let api: NavigationContainerComponent | null = null;

class NavigationService {
  private helpers = NavigationServiceHelpers;

  private getApiState() {
    return (api?.state as { nav: NavigationState | null }).nav ?? null;
  }

  public registerApi(ref: NavigationContainerComponent | null) {
    api = ref;
  }

  public pop(n: number = 1) {
    api?.dispatch(StackActions.pop({ n }));
  }

  public goBack() {
    api?.dispatch(NavigationActions.back());
  }

  public navigateTo(routeName: string, params?: NavigationParams, key?: string) {
    api?.dispatch(NavigationActions.navigate({
      routeName,
      params,
      key
    }));
  }

  public getCurrentRouteName(state?: NavigationState | null) {
    const navigationState = state ?? this.getApiState();

    return this.helpers.getCurrentRouteNameRecursively(navigationState);
  }

  public getCurrentRouteKey() {
    const navigationState = this.getApiState();

    return this.helpers.getCurrentRouteKeyRecursively(navigationState);
  }
}

const navigationService = new NavigationService();

export default navigationService;
