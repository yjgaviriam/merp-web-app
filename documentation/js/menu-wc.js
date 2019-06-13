'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">merp-web-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-29c36a819eb7d8b4972aed5d6068501d"' : 'data-target="#xs-components-links-module-AppModule-29c36a819eb7d8b4972aed5d6068501d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-29c36a819eb7d8b4972aed5d6068501d"' :
                                            'id="xs-components-links-module-AppModule-29c36a819eb7d8b4972aed5d6068501d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CircuitsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CircuitsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CitiesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CitiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContractsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContractsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EnterprisesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EnterprisesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterCircuitModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterCircuitModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterCitiesModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterCitiesModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterContractModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterContractModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterEnterpriseModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterEnterpriseModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterProjectModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterProjectModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterSubstationModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterSubstationModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterUserModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterUserModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubstationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubstationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-0711d297a13ec54e643b362f005ec780"' : 'data-target="#xs-components-links-module-SharedModule-0711d297a13ec54e643b362f005ec780"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-0711d297a13ec54e643b362f005ec780"' :
                                            'id="xs-components-links-module-SharedModule-0711d297a13ec54e643b362f005ec780"' }>
                                            <li class="link">
                                                <a href="components/BreadcrumbComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BreadcrumbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppConstants.html" data-type="entity-link">AppConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/Circuit.html" data-type="entity-link">Circuit</a>
                            </li>
                            <li class="link">
                                <a href="classes/City.html" data-type="entity-link">City</a>
                            </li>
                            <li class="link">
                                <a href="classes/Contract.html" data-type="entity-link">Contract</a>
                            </li>
                            <li class="link">
                                <a href="classes/Department.html" data-type="entity-link">Department</a>
                            </li>
                            <li class="link">
                                <a href="classes/Enterprise.html" data-type="entity-link">Enterprise</a>
                            </li>
                            <li class="link">
                                <a href="classes/Project.html" data-type="entity-link">Project</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link">Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Substation.html" data-type="entity-link">Substation</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeNetwork.html" data-type="entity-link">TypeNetwork</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeTown.html" data-type="entity-link">TypeTown</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CircuitService.html" data-type="entity-link">CircuitService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CityService.html" data-type="entity-link">CityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContractService.html" data-type="entity-link">ContractService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DepartmentService.html" data-type="entity-link">DepartmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EnterpriseService.html" data-type="entity-link">EnterpriseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjectService.html" data-type="entity-link">ProjectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoleService.html" data-type="entity-link">RoleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubstationService.html" data-type="entity-link">SubstationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TypeNetworkService.html" data-type="entity-link">TypeNetworkService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TypeTownService.html" data-type="entity-link">TypeTownService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});