import { defineComponent, ref, watch, resolveComponent, mergeProps, withCtx, createVNode, renderSlot, useSSRContext, createTextVNode, reactive, openBlock, createBlock, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ModalDialog",
  __ssrInlineRender: true,
  props: {
    open: Boolean
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const dialog = ref(props.open);
    watch(
      () => props.open,
      (newVal) => {
        dialog.value = newVal;
      }
    );
    const closeDialog = () => {
      dialog.value = false;
      emit("update:open", false);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card_text = resolveComponent("v-card-text");
      _push(ssrRenderComponent(_component_v_dialog, mergeProps({
        modelValue: dialog.value,
        "onUpdate:modelValue": ($event) => dialog.value = $event,
        width: "auto",
        persistent: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, { "max-width": "400" }, {
              subtitle: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_icon, {
                    icon: "mdi-close",
                    onClick: ($event) => closeDialog()
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_icon, {
                      icon: "mdi-close",
                      onClick: ($event) => closeDialog()
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, { "max-width": "400" }, {
                subtitle: withCtx(() => [
                  createVNode(_component_v_icon, {
                    icon: "mdi-close",
                    onClick: ($event) => closeDialog()
                  }, null, 8, ["onClick"])
                ]),
                default: withCtx(() => [
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal/ModalDialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormUser",
  __ssrInlineRender: true,
  emits: ["close-dialog"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const providerName = ref("");
    const email = ref("");
    const cpf = ref("");
    const selectedOption = ref("");
    const selectedMode = ref("");
    const loading = ref(false);
    const options = [
      "Desenvolvedor",
      "Publicitário",
      "Copy",
      "Designer",
      "Atendimento",
      "RH"
    ];
    const modes = ["Home Office", "Presencial", "Híbrido"];
    const createUser = () => {
      loading.value = true;
      const data = {
        name: providerName.value,
        email: email.value,
        cpf: cpf.value,
        role: selectedOption.value,
        operation: selectedMode.value
      };
      router.post("prestadores/", data, {
        replace: true,
        onFinish: () => {
          loading.value = false;
          emit("close-dialog");
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_form, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_text_field, {
              modelValue: providerName.value,
              "onUpdate:modelValue": ($event) => providerName.value = $event,
              label: "Prestador de Serviço",
              type: "text"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_text_field, {
              modelValue: email.value,
              "onUpdate:modelValue": ($event) => email.value = $event,
              label: "E-mail",
              type: "email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_text_field, {
              modelValue: cpf.value,
              "onUpdate:modelValue": ($event) => cpf.value = $event,
              label: "CPF",
              type: "text"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_select, {
              modelValue: selectedOption.value,
              "onUpdate:modelValue": ($event) => selectedOption.value = $event,
              items: options,
              label: "Escolha uma função",
              outlined: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_select, {
              modelValue: selectedMode.value,
              "onUpdate:modelValue": ($event) => selectedMode.value = $event,
              items: modes,
              label: "Escolha o modo de trabalho",
              outlined: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              loading: loading.value,
              block: "",
              class: "mt-2",
              onClick: createUser
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cadastrar `);
                } else {
                  return [
                    createTextVNode(" Cadastrar ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_text_field, {
                modelValue: providerName.value,
                "onUpdate:modelValue": ($event) => providerName.value = $event,
                label: "Prestador de Serviço",
                type: "text"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_text_field, {
                modelValue: email.value,
                "onUpdate:modelValue": ($event) => email.value = $event,
                label: "E-mail",
                type: "email"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_text_field, {
                modelValue: cpf.value,
                "onUpdate:modelValue": ($event) => cpf.value = $event,
                label: "CPF",
                type: "text"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_select, {
                modelValue: selectedOption.value,
                "onUpdate:modelValue": ($event) => selectedOption.value = $event,
                items: options,
                label: "Escolha uma função",
                outlined: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_select, {
                modelValue: selectedMode.value,
                "onUpdate:modelValue": ($event) => selectedMode.value = $event,
                items: modes,
                label: "Escolha o modo de trabalho",
                outlined: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_btn, {
                loading: loading.value,
                block: "",
                class: "mt-2",
                onClick: createUser
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cadastrar ")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/User/FormUser.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FormUser = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b9651f50"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    prestadores: Object
  },
  setup(__props) {
    const pageTitle = ref(" | Prestadores de Serviço");
    const columns = reactive(["Nome", "Ações"]);
    const open = ref(false);
    function deleteUser(id) {
      router.delete("prestadores/" + id);
    }
    function openModal() {
      open.value = true;
    }
    const closeModal = () => {
      open.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_painel_gestao = resolveComponent("painel-gestao");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      _push(ssrRenderComponent(_component_painel_gestao, mergeProps({
        backTo: true,
        "page-name": pageTitle.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_table, { "fixed-header": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead class="header" style="${ssrRenderStyle({ "background-color": "red" })}" data-v-9b064164${_scopeId2}><tr data-v-9b064164${_scopeId2}><!--[-->`);
                  ssrRenderList(columns, (column, index) => {
                    _push3(`<th class="${ssrRenderClass(column === "Nome" ? "text-left" : "text-right")}" data-v-9b064164${_scopeId2}>${ssrInterpolate(column)}</th>`);
                  });
                  _push3(`<!--]--></tr></thead><tbody data-v-9b064164${_scopeId2}><!--[-->`);
                  ssrRenderList(__props.prestadores, (item) => {
                    _push3(`<tr data-v-9b064164${_scopeId2}><td data-v-9b064164${_scopeId2}>${ssrInterpolate(item.name)}</td><td class="actions" data-v-9b064164${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_btn, {
                      size: "small",
                      class: "search"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_icon, { icon: "mdi-text-box-search-outline" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_icon, { icon: "mdi-text-box-search-outline" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_btn, {
                      size: "small",
                      class: "edit"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_icon, { icon: "mdi-file-edit-outline" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_icon, { icon: "mdi-file-edit-outline" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_btn, {
                      size: "small",
                      class: "danger",
                      onClick: ($event) => deleteUser(item.id)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_icon, { icon: "mdi-trash-can" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_icon, { icon: "mdi-trash-can" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", {
                      class: "header",
                      style: { "background-color": "red" }
                    }, [
                      createVNode("tr", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(columns, (column, index) => {
                          return openBlock(), createBlock("th", {
                            class: column === "Nome" ? "text-left" : "text-right",
                            key: index
                          }, toDisplayString(column), 3);
                        }), 128))
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.prestadores, (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.name
                        }, [
                          createVNode("td", null, toDisplayString(item.name), 1),
                          createVNode("td", { class: "actions" }, [
                            createVNode(_component_v_btn, {
                              size: "small",
                              class: "search"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { icon: "mdi-text-box-search-outline" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              size: "small",
                              class: "edit"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { icon: "mdi-file-edit-outline" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              size: "small",
                              class: "danger",
                              onClick: ($event) => deleteUser(item.id)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { icon: "mdi-trash-can" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="novo-prestador" data-v-9b064164${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              size: "small",
              class: "new",
              onClick: ($event) => openModal()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Novo `);
                  _push3(ssrRenderComponent(_component_v_icon, { icon: "mdi-plus" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Novo "),
                    createVNode(_component_v_icon, { icon: "mdi-plus" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              open: open.value,
              "onUpdate:open": ($event) => open.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(FormUser, { onCloseDialog: closeModal }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(FormUser, { onCloseDialog: closeModal })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_table, { "fixed-header": "" }, {
                default: withCtx(() => [
                  createVNode("thead", {
                    class: "header",
                    style: { "background-color": "red" }
                  }, [
                    createVNode("tr", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(columns, (column, index) => {
                        return openBlock(), createBlock("th", {
                          class: column === "Nome" ? "text-left" : "text-right",
                          key: index
                        }, toDisplayString(column), 3);
                      }), 128))
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.prestadores, (item) => {
                      return openBlock(), createBlock("tr", {
                        key: item.name
                      }, [
                        createVNode("td", null, toDisplayString(item.name), 1),
                        createVNode("td", { class: "actions" }, [
                          createVNode(_component_v_btn, {
                            size: "small",
                            class: "search"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { icon: "mdi-text-box-search-outline" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            size: "small",
                            class: "edit"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { icon: "mdi-file-edit-outline" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            size: "small",
                            class: "danger",
                            onClick: ($event) => deleteUser(item.id)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { icon: "mdi-trash-can" })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createVNode("div", { class: "novo-prestador" }, [
                createVNode(_component_v_btn, {
                  size: "small",
                  class: "new",
                  onClick: ($event) => openModal()
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Novo "),
                    createVNode(_component_v_icon, { icon: "mdi-plus" })
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              createVNode(_sfc_main$2, {
                open: open.value,
                "onUpdate:open": ($event) => open.value = $event
              }, {
                default: withCtx(() => [
                  createVNode(FormUser, { onCloseDialog: closeModal })
                ]),
                _: 1
              }, 8, ["open", "onUpdate:open"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Gestao/Prestadores/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9b064164"]]);
export {
  Index as default
};
