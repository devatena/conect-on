import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext, ref, watch, createVNode, withModifiers, defineComponent, reactive, unref } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { router, Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$3 = {
  __name: "CardTitle",
  __ssrInlineRender: true,
  props: {
    title: String,
    back: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const goBack = () => {
      window.history.back();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_icon = resolveComponent("v-icon");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ class: "mx-auto" }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.title), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.back) {
              _push2(ssrRenderComponent(_component_v_icon, {
                icon: "mdi-arrow-left",
                start: "",
                onClick: ($event) => goBack()
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.back ? (openBlock(), createBlock(_component_v_icon, {
                key: 0,
                icon: "mdi-arrow-left",
                start: "",
                onClick: ($event) => goBack()
              }, null, 8, ["onClick"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/User/CardTitle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CardTitle = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4cdddc4f"]]);
const _sfc_main$2 = {
  __name: "UserAjuste",
  __ssrInlineRender: true,
  props: {
    record: Array
  },
  setup(__props) {
    const props = __props;
    const dialog = ref(false);
    const buttonLoading = ref(false);
    const selectedItem = ref({
      entrada: "",
      saida: "",
      justificativa: ""
      // Adicionando campo de justificativa
    });
    const openDialog = () => {
      dialog.value = true;
      setValue();
    };
    const closeDialog = () => {
      dialog.value = false;
      cleanValue();
    };
    const saveAdjustments = () => {
      buttonLoading.value = true;
      const data = {
        time_recording_id: props.record.id,
        old_change: JSON.stringify({
          entrada: props.record.input,
          saida: props.record.output
        }),
        new_change: JSON.stringify({
          entrada: selectedItem.value.entrada,
          saida: selectedItem.value.saida
        }),
        justification: selectedItem.value.justificativa
      };
      router.post("/record/send-ajustment", data, {
        replace: true,
        onFinish: (visit) => {
          buttonLoading.value = false;
          closeDialog();
        }
      });
    };
    const cleanValue = () => {
      selectedItem.value = {
        entrada: "",
        saida: "",
        justificativa: ""
      };
    };
    const setValue = () => {
      selectedItem.value = {
        entrada: props.record.input,
        saida: props.record.output,
        justificativa: ""
      };
    };
    const isSubmitEnabled = ref(false);
    watch(
      () => [
        selectedItem.value.justificativa,
        selectedItem.value.entrada,
        selectedItem.value.saida
      ],
      ([newJustificativa, newEntrada, newSaida]) => {
        isSubmitEnabled.value = newJustificativa.trim().length > 0 && newEntrada && newSaida;
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_spacer = resolveComponent("v-spacer");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_btn, {
        "prepend-icon": "mdi-pencil",
        variant: "outlined",
        size: "x-small",
        color: __props.record.adjustment === "sent" ? "green" : "orange",
        class: "mb-1 mt-1",
        onClick: ($event) => __props.record.adjustment == null ? openDialog() : ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(__props.record.adjustment === "sent" ? "Ajuste enviado" : "Ajustes")}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(__props.record.adjustment === "sent" ? "Ajuste enviado" : "Ajustes"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: dialog.value,
        "onUpdate:modelValue": ($event) => dialog.value = $event,
        "max-width": "500px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="headline"${_scopeId3}>Ajustar horas trabalhas</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "headline" }, "Ajustar horas trabalhas")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_form, {
                          ref: "form",
                          onSubmit: () => {
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            label: "Entrada",
                                            modelValue: selectedItem.value.entrada,
                                            "onUpdate:modelValue": ($event) => selectedItem.value.entrada = $event,
                                            type: "time",
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              label: "Entrada",
                                              modelValue: selectedItem.value.entrada,
                                              "onUpdate:modelValue": ($event) => selectedItem.value.entrada = $event,
                                              type: "time",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            label: "Saída",
                                            modelValue: selectedItem.value.saida,
                                            "onUpdate:modelValue": ($event) => selectedItem.value.saida = $event,
                                            type: "time",
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              label: "Saída",
                                              modelValue: selectedItem.value.saida,
                                              "onUpdate:modelValue": ($event) => selectedItem.value.saida = $event,
                                              type: "time",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "Entrada",
                                            modelValue: selectedItem.value.entrada,
                                            "onUpdate:modelValue": ($event) => selectedItem.value.entrada = $event,
                                            type: "time",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "Saída",
                                            modelValue: selectedItem.value.saida,
                                            "onUpdate:modelValue": ($event) => selectedItem.value.saida = $event,
                                            type: "time",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_textarea, {
                                            label: "Justificativa",
                                            modelValue: selectedItem.value.justificativa,
                                            "onUpdate:modelValue": ($event) => selectedItem.value.justificativa = $event,
                                            rows: "3",
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_textarea, {
                                              label: "Justificativa",
                                              modelValue: selectedItem.value.justificativa,
                                              "onUpdate:modelValue": ($event) => selectedItem.value.justificativa = $event,
                                              rows: "3",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_textarea, {
                                            label: "Justificativa",
                                            modelValue: selectedItem.value.justificativa,
                                            "onUpdate:modelValue": ($event) => selectedItem.value.justificativa = $event,
                                            rows: "3",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          label: "Entrada",
                                          modelValue: selectedItem.value.entrada,
                                          "onUpdate:modelValue": ($event) => selectedItem.value.entrada = $event,
                                          type: "time",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          label: "Saída",
                                          modelValue: selectedItem.value.saida,
                                          "onUpdate:modelValue": ($event) => selectedItem.value.saida = $event,
                                          type: "time",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_textarea, {
                                          label: "Justificativa",
                                          modelValue: selectedItem.value.justificativa,
                                          "onUpdate:modelValue": ($event) => selectedItem.value.justificativa = $event,
                                          rows: "3",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_form, {
                            ref: "form",
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        label: "Entrada",
                                        modelValue: selectedItem.value.entrada,
                                        "onUpdate:modelValue": ($event) => selectedItem.value.entrada = $event,
                                        type: "time",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        label: "Saída",
                                        modelValue: selectedItem.value.saida,
                                        "onUpdate:modelValue": ($event) => selectedItem.value.saida = $event,
                                        type: "time",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_textarea, {
                                        label: "Justificativa",
                                        modelValue: selectedItem.value.justificativa,
                                        "onUpdate:modelValue": ($event) => selectedItem.value.justificativa = $event,
                                        rows: "3",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_actions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_spacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "blue darken-1",
                          text: "",
                          onClick: closeDialog
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Cancelar`);
                            } else {
                              return [
                                createTextVNode("Cancelar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "blue darken-1",
                          text: "",
                          onClick: saveAdjustments,
                          loading: buttonLoading.value,
                          disabled: !isSubmitEnabled.value
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Enviar pra aprovação`);
                            } else {
                              return [
                                createTextVNode("Enviar pra aprovação")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            color: "blue darken-1",
                            text: "",
                            onClick: closeDialog
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancelar")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            color: "blue darken-1",
                            text: "",
                            onClick: saveAdjustments,
                            loading: buttonLoading.value,
                            disabled: !isSubmitEnabled.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Enviar pra aprovação")
                            ]),
                            _: 1
                          }, 8, ["loading", "disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card_title, null, {
                      default: withCtx(() => [
                        createVNode("span", { class: "headline" }, "Ajustar horas trabalhas")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_form, {
                          ref: "form",
                          onSubmit: withModifiers(() => {
                          }, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Entrada",
                                      modelValue: selectedItem.value.entrada,
                                      "onUpdate:modelValue": ($event) => selectedItem.value.entrada = $event,
                                      type: "time",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Saída",
                                      modelValue: selectedItem.value.saida,
                                      "onUpdate:modelValue": ($event) => selectedItem.value.saida = $event,
                                      type: "time",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_textarea, {
                                      label: "Justificativa",
                                      modelValue: selectedItem.value.justificativa,
                                      "onUpdate:modelValue": ($event) => selectedItem.value.justificativa = $event,
                                      rows: "3",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onSubmit"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_btn, {
                          color: "blue darken-1",
                          text: "",
                          onClick: closeDialog
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancelar")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_btn, {
                          color: "blue darken-1",
                          text: "",
                          onClick: saveAdjustments,
                          loading: buttonLoading.value,
                          disabled: !isSubmitEnabled.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Enviar pra aprovação")
                          ]),
                          _: 1
                        }, 8, ["loading", "disabled"])
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
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, null, {
                    default: withCtx(() => [
                      createVNode("span", { class: "headline" }, "Ajustar horas trabalhas")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_form, {
                        ref: "form",
                        onSubmit: withModifiers(() => {
                        }, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Entrada",
                                    modelValue: selectedItem.value.entrada,
                                    "onUpdate:modelValue": ($event) => selectedItem.value.entrada = $event,
                                    type: "time",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Saída",
                                    modelValue: selectedItem.value.saida,
                                    "onUpdate:modelValue": ($event) => selectedItem.value.saida = $event,
                                    type: "time",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_textarea, {
                                    label: "Justificativa",
                                    modelValue: selectedItem.value.justificativa,
                                    "onUpdate:modelValue": ($event) => selectedItem.value.justificativa = $event,
                                    rows: "3",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onSubmit"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_spacer),
                      createVNode(_component_v_btn, {
                        color: "blue darken-1",
                        text: "",
                        onClick: closeDialog
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancelar")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_btn, {
                        color: "blue darken-1",
                        text: "",
                        onClick: saveAdjustments,
                        loading: buttonLoading.value,
                        disabled: !isSubmitEnabled.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Enviar pra aprovação")
                        ]),
                        _: 1
                      }, 8, ["loading", "disabled"])
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/User/UserAjuste.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const UserAjuste = _sfc_main$2;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ListRecord",
  __ssrInlineRender: true,
  props: {
    records: Object
  },
  setup(__props) {
    const props = __props;
    function formatDate(dataString) {
      const [ano, mes, dia] = dataString.split("-");
      const data = new Date(ano, mes - 1, dia);
      const dataFormatada = `${data.getDate().toString().padStart(2, "0")}/${(data.getMonth() + 1).toString().padStart(2, "0")}/${data.getFullYear()}`;
      return dataFormatada;
    }
    function interHours(output, input) {
      const data1 = /* @__PURE__ */ new Date("1970-01-01T" + output + "Z");
      const data2 = /* @__PURE__ */ new Date("1970-01-01T" + input + "Z");
      const diferencaEmMs = Math.abs(data2 - data1);
      const diferencaEmHoras = diferencaEmMs / (1e3 * 60 * 60);
      const h = Math.floor(diferencaEmHoras);
      const m = Math.floor((diferencaEmHoras - h) * 60);
      const s = Math.round(((diferencaEmHoras - h) * 60 - m) * 60);
      const horaFormatada = (h < 10 ? "0" : "") + h;
      const minutoFormatado = (m < 10 ? "0" : "") + m;
      const segundoFormatado = (s < 10 ? "0" : "") + s;
      const hora = horaFormatada + ":" + minutoFormatado + ":" + segundoFormatado;
      return hora;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<!--[-->`);
      ssrRenderList(props.records.hour, (day, index) => {
        _push(`<div elevation="0" class="mb-4" data-v-4eb9ae59>`);
        _push(ssrRenderComponent(_component_v_row, {
          "no-gutters": "",
          class: "title-data"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_col, {
                cols: "9",
                class: "d-flex justify-start"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(formatDate(index.slice(0, 10)))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(formatDate(index.slice(0, 10))), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_col, {
                cols: "2",
                class: "text--secondary"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Total: ${ssrInterpolate(__props.records.totalHour[index])}`);
                  } else {
                    return [
                      createTextVNode(" Total: " + toDisplayString(__props.records.totalHour[index]), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_col, {
                cols: "1",
                class: "text--secondary"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (!__props.records.errors[index]) {
                      _push3(ssrRenderComponent(_component_v_icon, { icon: "mdi-check-all" }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (__props.records.errors[index]) {
                      _push3(ssrRenderComponent(_component_v_icon, { icon: "mdi-alert" }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      !__props.records.errors[index] ? (openBlock(), createBlock(_component_v_icon, {
                        key: 0,
                        icon: "mdi-check-all"
                      })) : createCommentVNode("", true),
                      __props.records.errors[index] ? (openBlock(), createBlock(_component_v_icon, {
                        key: 1,
                        icon: "mdi-alert"
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_col, {
                  cols: "9",
                  class: "d-flex justify-start"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(formatDate(index.slice(0, 10))), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_v_col, {
                  cols: "2",
                  class: "text--secondary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Total: " + toDisplayString(__props.records.totalHour[index]), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_v_col, {
                  cols: "1",
                  class: "text--secondary"
                }, {
                  default: withCtx(() => [
                    !__props.records.errors[index] ? (openBlock(), createBlock(_component_v_icon, {
                      key: 0,
                      icon: "mdi-check-all"
                    })) : createCommentVNode("", true),
                    __props.records.errors[index] ? (openBlock(), createBlock(_component_v_icon, {
                      key: 1,
                      icon: "mdi-alert"
                    })) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_v_row, {
          "no-gutters": "",
          class: "p-2",
          style: { "background-color": "rgb(213, 213, 213)" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_col, {
                cols: "1",
                class: "text-left"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` # `);
                  } else {
                    return [
                      createTextVNode(" # ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_col, {
                cols: "2",
                class: "text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Entrada `);
                  } else {
                    return [
                      createTextVNode(" Entrada ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_col, {
                cols: "2",
                class: "text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Saida `);
                  } else {
                    return [
                      createTextVNode(" Saida ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_col, {
                cols: "2",
                class: "text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Tempo trabalhado `);
                  } else {
                    return [
                      createTextVNode(" Tempo trabalhado ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_col, {
                cols: "2",
                class: "text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Intervalo `);
                  } else {
                    return [
                      createTextVNode(" Intervalo ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_col, {
                cols: "3",
                class: "text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Ações `);
                  } else {
                    return [
                      createTextVNode(" Ações ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_col, {
                  cols: "1",
                  class: "text-left"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" # ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "2",
                  class: "text-center"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Entrada ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "2",
                  class: "text-center"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Saida ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "2",
                  class: "text-center"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Tempo trabalhado ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "2",
                  class: "text-center"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Intervalo ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "3",
                  class: "text-center"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Ações ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<!--[-->`);
        ssrRenderList(__props.records.hour[index], (item, count) => {
          _push(ssrRenderComponent(_component_v_row, {
            key: index,
            "no-gutters": "",
            class: "p-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_v_col, {
                  cols: "1",
                  class: "text-left"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(count + 1)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(count + 1), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_v_col, {
                  cols: "2",
                  class: "text-center"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.input)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.input), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_v_col, {
                  cols: "2",
                  class: "text-center"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.output)} `);
                      if (!item.output) {
                        _push3(ssrRenderComponent(_component_v_icon, { icon: "mdi-alert" }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.output) + " ", 1),
                        !item.output ? (openBlock(), createBlock(_component_v_icon, {
                          key: 0,
                          icon: "mdi-alert"
                        })) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_v_col, {
                  cols: "2",
                  class: "text-center"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.hour_complete)} `);
                      if (!item.hour_complete) {
                        _push3(ssrRenderComponent(_component_v_icon, { icon: "mdi-alert" }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.hour_complete) + " ", 1),
                        !item.hour_complete ? (openBlock(), createBlock(_component_v_icon, {
                          key: 0,
                          icon: "mdi-alert"
                        })) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_v_col, {
                  cols: "2",
                  class: "text-center"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(count == 0 ? " " : interHours(
                        __props.records.hour[index][count - 1].output,
                        item.input
                      ))} <br data-v-4eb9ae59${_scopeId2}>`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(count == 0 ? " " : interHours(
                          __props.records.hour[index][count - 1].output,
                          item.input
                        )) + " ", 1),
                        createVNode("br")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_v_col, {
                  cols: "3",
                  class: "text-center"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (item.adjustment !== "approved") {
                        _push3(ssrRenderComponent(UserAjuste, { record: item }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      if (item.adjustment === "approved") {
                        _push3(ssrRenderComponent(_component_v_btn, {
                          variant: "outlined",
                          size: "x-small",
                          color: "blue",
                          class: "mb-1 mt-1"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` Horas ajustadas `);
                            } else {
                              return [
                                createTextVNode(" Horas ajustadas ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        item.adjustment !== "approved" ? (openBlock(), createBlock(UserAjuste, {
                          key: 0,
                          record: item
                        }, null, 8, ["record"])) : createCommentVNode("", true),
                        item.adjustment === "approved" ? (openBlock(), createBlock(_component_v_btn, {
                          key: 1,
                          variant: "outlined",
                          size: "x-small",
                          color: "blue",
                          class: "mb-1 mt-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Horas ajustadas ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_v_col, {
                    cols: "1",
                    class: "text-left"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(count + 1), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_v_col, {
                    cols: "2",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.input), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_v_col, {
                    cols: "2",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.output) + " ", 1),
                      !item.output ? (openBlock(), createBlock(_component_v_icon, {
                        key: 0,
                        icon: "mdi-alert"
                      })) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_v_col, {
                    cols: "2",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.hour_complete) + " ", 1),
                      !item.hour_complete ? (openBlock(), createBlock(_component_v_icon, {
                        key: 0,
                        icon: "mdi-alert"
                      })) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_v_col, {
                    cols: "2",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(count == 0 ? " " : interHours(
                        __props.records.hour[index][count - 1].output,
                        item.input
                      )) + " ", 1),
                      createVNode("br")
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_v_col, {
                    cols: "3",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      item.adjustment !== "approved" ? (openBlock(), createBlock(UserAjuste, {
                        key: 0,
                        record: item
                      }, null, 8, ["record"])) : createCommentVNode("", true),
                      item.adjustment === "approved" ? (openBlock(), createBlock(_component_v_btn, {
                        key: 1,
                        variant: "outlined",
                        size: "x-small",
                        color: "blue",
                        class: "mb-1 mt-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Horas ajustadas ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><hr data-v-4eb9ae59></div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/User/ListRecord.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ListRecords = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4eb9ae59"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Acompanhamento",
  __ssrInlineRender: true,
  props: {
    records: Object,
    dateFilter: {
      type: Object,
      default: {
        dataInicial: "",
        dataFinal: ""
      }
    }
  },
  setup(__props) {
    const props = __props;
    const date = reactive({
      dataInicial: props.dateFilter.dataInicial,
      dataFinal: props.dateFilter.dataFinal
    });
    function cleanfilter() {
      date.dataInicial = "";
      date.dataFinal = "";
      router.visit("/acompanhamento");
    }
    function searchList() {
      router.visit("/acompanhamento", {
        method: "get",
        data: {
          dataInicial: date.dataInicial,
          dataFinal: date.dataFinal
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_painel_user = resolveComponent("painel-user");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card_text = resolveComponent("v-card-text");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Acompanhamento" }, null, _parent));
      _push(ssrRenderComponent(_component_painel_user, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(CardTitle, { title: "Acompanhamento" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card, { class: "mx-auto mt-6" }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Meus registros `);
                } else {
                  return [
                    createTextVNode(" Meus registros ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: date.dataInicial,
                                "onUpdate:modelValue": ($event) => date.dataInicial = $event,
                                label: "Data Inicial",
                                type: "date"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  modelValue: date.dataInicial,
                                  "onUpdate:modelValue": ($event) => date.dataInicial = $event,
                                  label: "Data Inicial",
                                  type: "date"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: date.dataFinal,
                                "onUpdate:modelValue": ($event) => date.dataFinal = $event,
                                label: "Data Final",
                                type: "date"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  modelValue: date.dataFinal,
                                  "onUpdate:modelValue": ($event) => date.dataFinal = $event,
                                  label: "Data Final",
                                  type: "date"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "2",
                          class: "btn-filter"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, {
                                onClick: ($event) => searchList(),
                                class: "btn-search",
                                disabled: date.dataInicial === null || date.dataFinal === null
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Buscar`);
                                  } else {
                                    return [
                                      createTextVNode(" Buscar")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                onClick: ($event) => cleanfilter(),
                                disabled: date.dataInicial === null || date.dataFinal === null
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Limpar Filtro`);
                                  } else {
                                    return [
                                      createTextVNode(" Limpar Filtro")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, {
                                  onClick: ($event) => searchList(),
                                  class: "btn-search",
                                  disabled: date.dataInicial === null || date.dataFinal === null
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Buscar")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"]),
                                createVNode(_component_v_btn, {
                                  onClick: ($event) => cleanfilter(),
                                  disabled: date.dataInicial === null || date.dataFinal === null
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Limpar Filtro")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, { cols: "3" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: date.dataInicial,
                                "onUpdate:modelValue": ($event) => date.dataInicial = $event,
                                label: "Data Inicial",
                                type: "date"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "3" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: date.dataFinal,
                                "onUpdate:modelValue": ($event) => date.dataFinal = $event,
                                label: "Data Final",
                                type: "date"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "2",
                            class: "btn-filter"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                onClick: ($event) => searchList(),
                                class: "btn-search",
                                disabled: date.dataInicial === null || date.dataFinal === null
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Buscar")
                                ]),
                                _: 1
                              }, 8, ["onClick", "disabled"]),
                              createVNode(_component_v_btn, {
                                onClick: ($event) => cleanfilter(),
                                disabled: date.dataInicial === null || date.dataFinal === null
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Limpar Filtro")
                                ]),
                                _: 1
                              }, 8, ["onClick", "disabled"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(ListRecords, { records: __props.records }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(ListRecords, { records: __props.records }, null, 8, ["records"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { cols: "3" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              modelValue: date.dataInicial,
                              "onUpdate:modelValue": ($event) => date.dataInicial = $event,
                              label: "Data Inicial",
                              type: "date"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, { cols: "3" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              modelValue: date.dataFinal,
                              "onUpdate:modelValue": ($event) => date.dataFinal = $event,
                              label: "Data Final",
                              type: "date"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "2",
                          class: "btn-filter"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              onClick: ($event) => searchList(),
                              class: "btn-search",
                              disabled: date.dataInicial === null || date.dataFinal === null
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Buscar")
                              ]),
                              _: 1
                            }, 8, ["onClick", "disabled"]),
                            createVNode(_component_v_btn, {
                              onClick: ($event) => cleanfilter(),
                              disabled: date.dataInicial === null || date.dataFinal === null
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Limpar Filtro")
                              ]),
                              _: 1
                            }, 8, ["onClick", "disabled"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createVNode(ListRecords, { records: __props.records }, null, 8, ["records"])
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
              createVNode(CardTitle, { title: "Acompanhamento" }),
              createVNode(_component_v_card, { class: "mx-auto mt-6" }, {
                title: withCtx(() => [
                  createTextVNode(" Meus registros ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { cols: "3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            modelValue: date.dataInicial,
                            "onUpdate:modelValue": ($event) => date.dataInicial = $event,
                            label: "Data Inicial",
                            type: "date"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, { cols: "3" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            modelValue: date.dataFinal,
                            "onUpdate:modelValue": ($event) => date.dataFinal = $event,
                            label: "Data Final",
                            type: "date"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "2",
                        class: "btn-filter"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            onClick: ($event) => searchList(),
                            class: "btn-search",
                            disabled: date.dataInicial === null || date.dataFinal === null
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Buscar")
                            ]),
                            _: 1
                          }, 8, ["onClick", "disabled"]),
                          createVNode(_component_v_btn, {
                            onClick: ($event) => cleanfilter(),
                            disabled: date.dataInicial === null || date.dataFinal === null
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Limpar Filtro")
                            ]),
                            _: 1
                          }, 8, ["onClick", "disabled"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode(ListRecords, { records: __props.records }, null, 8, ["records"])
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Colaborador/Acompanhamento.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Acompanhamento = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-183fe41c"]]);
export {
  Acompanhamento as default
};
