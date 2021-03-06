"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.options = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
var home_component_1 = require("./home/home.component");
var animations_1 = require("@angular/platform-browser/animations");
var select_1 = require("@angular/material/select");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var dialog_1 = require("@angular/material/dialog");
var radio_1 = require("@angular/material/radio");
var datepicker_1 = require("@angular/material/datepicker");
var forms_1 = require("@angular/forms");
var ngx_mask_1 = require("ngx-mask");
var form_login_component_1 = require("./form-login/form-login.component");
var form_simula_cpf_component_1 = require("./form-simula-cpf/form-simula-cpf.component");
var form_pre_cadastro_component_1 = require("./form-pre-cadastro/form-pre-cadastro.component");
var form_opcoes_atendimento_component_1 = require("./form-opcoes-atendimento/form-opcoes-atendimento.component");
var core_2 = require("@angular/material/core");
var dialog_alert_component_1 = require("./dialog-alert/dialog-alert.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var perguntas_frequentes_component_1 = require("./perguntas-frequentes/perguntas-frequentes.component");
var utils_service_1 = require("./utils.service");
var http_1 = require("@angular/common/http");
exports.options = null;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_bar_component_1.NavBarComponent,
                home_component_1.HomeComponent,
                form_login_component_1.FormLoginComponent,
                form_simula_cpf_component_1.FormSimulaCpfComponent,
                form_pre_cadastro_component_1.FormPreCadastroComponent,
                form_opcoes_atendimento_component_1.FormOpcoesAtendimentoComponent,
                dialog_alert_component_1.DialogAlertComponent,
                dashboard_component_1.DashboardComponent,
                perguntas_frequentes_component_1.PerguntasFrequentesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule,
                animations_1.BrowserAnimationsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                input_1.MatInputModule,
                select_1.MatSelectModule,
                form_field_1.MatFormFieldModule,
                progress_spinner_1.MatProgressSpinnerModule,
                select_1.MatSelectModule,
                dialog_1.MatDialogModule,
                datepicker_1.MatDatepickerModule,
                core_2.MatNativeDateModule,
                radio_1.MatRadioModule,
                ngx_mask_1.NgxMaskModule.forRoot(),
            ],
            providers: [utils_service_1.UtilsService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
