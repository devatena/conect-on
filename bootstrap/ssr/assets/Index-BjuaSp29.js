import { resolveComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm, Head, router } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      cpf: null,
      password: null
    });
    function login() {
      router.post("/", form);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Login" }, null, _parent));
      _push(`<div class="d-flex align-center flex-column login" data-v-43d8d566><div class="logo" data-v-43d8d566>`);
      _push(ssrRenderComponent(_component_v_img, {
        width: 100,
        src: "/img/logo.png",
        class: "mb-4"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_v_card, { width: "400" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_form, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          label: "Colaborador",
                          type: "text",
                          modelValue: unref(form).cpf,
                          "onUpdate:modelValue": ($event) => unref(form).cpf = $event
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          label: "Senha",
                          type: "password",
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          block: "",
                          class: "mt-2",
                          onClick: ($event) => login()
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Acessar`);
                            } else {
                              return [
                                createTextVNode("Acessar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_text_field, {
                            label: "Colaborador",
                            type: "text",
                            modelValue: unref(form).cpf,
                            "onUpdate:modelValue": ($event) => unref(form).cpf = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_v_text_field, {
                            label: "Senha",
                            type: "password",
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_v_btn, {
                            block: "",
                            class: "mt-2",
                            onClick: ($event) => login()
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Acessar")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_form, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          label: "Colaborador",
                          type: "text",
                          modelValue: unref(form).cpf,
                          "onUpdate:modelValue": ($event) => unref(form).cpf = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_v_text_field, {
                          label: "Senha",
                          type: "password",
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_v_btn, {
                          block: "",
                          class: "mt-2",
                          onClick: ($event) => login()
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Acessar")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode(_component_v_form, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_text_field, {
                        label: "Colaborador",
                        type: "text",
                        modelValue: unref(form).cpf,
                        "onUpdate:modelValue": ($event) => unref(form).cpf = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_text_field, {
                        label: "Senha",
                        type: "password",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_btn, {
                        block: "",
                        class: "mt-2",
                        onClick: ($event) => login()
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Acessar")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43d8d566"]]);
export {
  Index as default
};
