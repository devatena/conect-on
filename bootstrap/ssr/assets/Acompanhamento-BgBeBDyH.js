import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext, defineComponent, reactive, unref, createVNode, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { Head, router } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/User/CardTitle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardTitle = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4cdddc4f"]]);
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
      const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
      const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
      const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
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
                        _push4(ssrRenderComponent(_component_v_expansion_panels, { variant: "accordion" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_expansion_panel, {
                                elevation: "0",
                                style: { "background-color": "blueviolet", "color": "white" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_expansion_panel_title, { "hide-actions": true }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "4",
                                                  class: "d-flex justify-start"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Dia `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Dia ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "4",
                                                  class: "text--secondary"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Tempo trabalhado `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Tempo trabalhado ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "4",
                                                  class: "text--secondary"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Status `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Status ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_col, {
                                                    cols: "4",
                                                    class: "d-flex justify-start"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Dia ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "4",
                                                    class: "text--secondary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Tempo trabalhado ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "4",
                                                    class: "text--secondary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Status ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_row, { "no-gutters": "" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "4",
                                                  class: "d-flex justify-start"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Dia ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "4",
                                                  class: "text--secondary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Tempo trabalhado ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "4",
                                                  class: "text--secondary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Status ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_expansion_panel_title, { "hide-actions": true }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, { "no-gutters": "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "4",
                                                class: "d-flex justify-start"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Dia ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "4",
                                                class: "text--secondary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Tempo trabalhado ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "4",
                                                class: "text--secondary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Status ")
                                                ]),
                                                _: 1
                                              })
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
                              }, _parent5, _scopeId4));
                              _push5(`<!--[-->`);
                              ssrRenderList(__props.records.hour, (day, index) => {
                                _push5(ssrRenderComponent(_component_v_expansion_panel, {
                                  elevation: "0",
                                  key: index
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_expansion_panel_title, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_col, {
                                                    cols: "4",
                                                    class: "d-flex justify-start"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(formatDate(index.slice(0, 10)))}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(formatDate(index.slice(0, 10))), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(_component_v_col, {
                                                    cols: "4",
                                                    class: "text--secondary"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(__props.records.totalHour[index])}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(__props.records.totalHour[index]), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(_component_v_col, {
                                                    cols: "4",
                                                    class: "text--secondary"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        if (!__props.records.errors[index]) {
                                                          _push9(ssrRenderComponent(_component_v_icon, { icon: "mdi-check-all" }, null, _parent9, _scopeId8));
                                                        } else {
                                                          _push9(`<!---->`);
                                                        }
                                                        if (__props.records.errors[index]) {
                                                          _push9(ssrRenderComponent(_component_v_icon, { icon: "mdi-alert" }, null, _parent9, _scopeId8));
                                                        } else {
                                                          _push9(`<!---->`);
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
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_col, {
                                                      cols: "4",
                                                      class: "d-flex justify-start"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(formatDate(index.slice(0, 10))), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_col, {
                                                      cols: "4",
                                                      class: "text--secondary"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(__props.records.totalHour[index]), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_col, {
                                                      cols: "4",
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
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_row, { "no-gutters": "" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, {
                                                    cols: "4",
                                                    class: "d-flex justify-start"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(formatDate(index.slice(0, 10))), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_col, {
                                                    cols: "4",
                                                    class: "text--secondary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.records.totalHour[index]), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_col, {
                                                    cols: "4",
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
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_row, {
                                              "no-gutters": "",
                                              class: "p-2",
                                              style: { "background-color": "rgb(213, 213, 213)" }
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_col, {
                                                    cols: "2",
                                                    class: "text-left"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` # `);
                                                      } else {
                                                        return [
                                                          createTextVNode(" # ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(_component_v_col, {
                                                    cols: "2",
                                                    class: "text-left"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Entrada `);
                                                      } else {
                                                        return [
                                                          createTextVNode(" Entrada ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(_component_v_col, {
                                                    cols: "2",
                                                    class: "text-left"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Saida `);
                                                      } else {
                                                        return [
                                                          createTextVNode(" Saida ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(_component_v_col, {
                                                    cols: "2",
                                                    class: "text-left"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Tempo trabalhado `);
                                                      } else {
                                                        return [
                                                          createTextVNode(" Tempo trabalhado ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(_component_v_col, {
                                                    cols: "2",
                                                    class: "text-left"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Intervalo `);
                                                      } else {
                                                        return [
                                                          createTextVNode(" Intervalo ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(_component_v_col, {
                                                    cols: "2",
                                                    class: "text-left"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Ações `);
                                                      } else {
                                                        return [
                                                          createTextVNode(" Ações ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      class: "text-left"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" # ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      class: "text-left"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Entrada ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      class: "text-left"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Saida ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      class: "text-left"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Tempo trabalhado ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      class: "text-left"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Intervalo ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      class: "text-left"
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
                                            }, _parent7, _scopeId6));
                                            _push7(`<!--[-->`);
                                            ssrRenderList(__props.records.hour[index], (item, count) => {
                                              _push7(ssrRenderComponent(_component_v_row, {
                                                key: index,
                                                "no-gutters": ""
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_v_col, {
                                                      cols: "2",
                                                      class: "text-left"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(count + 1)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(count + 1), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(ssrRenderComponent(_component_v_col, {
                                                      cols: "2",
                                                      class: "text-left"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(item.input)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(item.input), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(ssrRenderComponent(_component_v_col, {
                                                      cols: "2",
                                                      class: "text-left"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(item.output)} `);
                                                          if (!item.output) {
                                                            _push9(ssrRenderComponent(_component_v_icon, { icon: "mdi-alert" }, null, _parent9, _scopeId8));
                                                          } else {
                                                            _push9(`<!---->`);
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
                                                    }, _parent8, _scopeId7));
                                                    _push8(ssrRenderComponent(_component_v_col, {
                                                      cols: "2",
                                                      class: "text-left"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(item.hour_complete)} `);
                                                          if (!item.hour_complete) {
                                                            _push9(ssrRenderComponent(_component_v_icon, { icon: "mdi-alert" }, null, _parent9, _scopeId8));
                                                          } else {
                                                            _push9(`<!---->`);
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
                                                    }, _parent8, _scopeId7));
                                                    _push8(ssrRenderComponent(_component_v_col, {
                                                      cols: "2",
                                                      class: "text-left"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(count == 0 ? " " : interHours(
                                                            __props.records.hour[index][count - 1].output,
                                                            item.input
                                                          ))} <br data-v-4b039259${_scopeId8}>`);
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
                                                    }, _parent8, _scopeId7));
                                                    _push8(ssrRenderComponent(_component_v_col, {
                                                      cols: "2",
                                                      class: "text-left"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(_component_v_btn, {
                                                            "prepend-icon": "mdi-pencil",
                                                            variant: "outlined",
                                                            size: "x-small",
                                                            color: "orange",
                                                            class: "mb-1"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(` Ajuste `);
                                                              } else {
                                                                return [
                                                                  createTextVNode(" Ajuste ")
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(_component_v_btn, {
                                                              "prepend-icon": "mdi-pencil",
                                                              variant: "outlined",
                                                              size: "x-small",
                                                              color: "orange",
                                                              class: "mb-1"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Ajuste ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(_component_v_col, {
                                                        cols: "2",
                                                        class: "text-left"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(count + 1), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_col, {
                                                        cols: "2",
                                                        class: "text-left"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.input), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_col, {
                                                        cols: "2",
                                                        class: "text-left"
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
                                                        class: "text-left"
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
                                                        class: "text-left"
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
                                                        cols: "2",
                                                        class: "text-left"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_btn, {
                                                            "prepend-icon": "mdi-pencil",
                                                            variant: "outlined",
                                                            size: "x-small",
                                                            color: "orange",
                                                            class: "mb-1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Ajuste ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              createVNode(_component_v_row, {
                                                "no-gutters": "",
                                                class: "p-2",
                                                style: { "background-color": "rgb(213, 213, 213)" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    class: "text-left"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" # ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    class: "text-left"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Entrada ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    class: "text-left"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Saida ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    class: "text-left"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Tempo trabalhado ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    class: "text-left"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Intervalo ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    class: "text-left"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Ações ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              (openBlock(true), createBlock(Fragment, null, renderList(__props.records.hour[index], (item, count) => {
                                                return openBlock(), createBlock(_component_v_row, {
                                                  key: index,
                                                  "no-gutters": ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      class: "text-left"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(count + 1), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      class: "text-left"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.input), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      class: "text-left"
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
                                                      class: "text-left"
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
                                                      class: "text-left"
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
                                                      cols: "2",
                                                      class: "text-left"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, {
                                                          "prepend-icon": "mdi-pencil",
                                                          variant: "outlined",
                                                          size: "x-small",
                                                          color: "orange",
                                                          class: "mb-1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Ajuste ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_expansion_panel_title, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, { "no-gutters": "" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "4",
                                                  class: "d-flex justify-start"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(formatDate(index.slice(0, 10))), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_col, {
                                                  cols: "4",
                                                  class: "text--secondary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.records.totalHour[index]), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_col, {
                                                  cols: "4",
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
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_expansion_panel_text, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              "no-gutters": "",
                                              class: "p-2",
                                              style: { "background-color": "rgb(213, 213, 213)" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  class: "text-left"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" # ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  class: "text-left"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Entrada ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  class: "text-left"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Saida ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  class: "text-left"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Tempo trabalhado ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  class: "text-left"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Intervalo ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  class: "text-left"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Ações ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            (openBlock(true), createBlock(Fragment, null, renderList(__props.records.hour[index], (item, count) => {
                                              return openBlock(), createBlock(_component_v_row, {
                                                key: index,
                                                "no-gutters": ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    class: "text-left"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(count + 1), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    class: "text-left"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.input), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    class: "text-left"
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
                                                    class: "text-left"
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
                                                    class: "text-left"
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
                                                    cols: "2",
                                                    class: "text-left"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, {
                                                        "prepend-icon": "mdi-pencil",
                                                        variant: "outlined",
                                                        size: "x-small",
                                                        color: "orange",
                                                        class: "mb-1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Ajuste ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                createVNode(_component_v_expansion_panel, {
                                  elevation: "0",
                                  style: { "background-color": "blueviolet", "color": "white" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_expansion_panel_title, { "hide-actions": true }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, { "no-gutters": "" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "4",
                                              class: "d-flex justify-start"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Dia ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "4",
                                              class: "text--secondary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Tempo trabalhado ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "4",
                                              class: "text--secondary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Status ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.records.hour, (day, index) => {
                                  return openBlock(), createBlock(_component_v_expansion_panel, {
                                    elevation: "0",
                                    key: index
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_expansion_panel_title, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, { "no-gutters": "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "4",
                                                class: "d-flex justify-start"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(formatDate(index.slice(0, 10))), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_col, {
                                                cols: "4",
                                                class: "text--secondary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.records.totalHour[index]), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_col, {
                                                cols: "4",
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
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_expansion_panel_text, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, {
                                            "no-gutters": "",
                                            class: "p-2",
                                            style: { "background-color": "rgb(213, 213, 213)" }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                class: "text-left"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" # ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                class: "text-left"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Entrada ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                class: "text-left"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Saida ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                class: "text-left"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Tempo trabalhado ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                class: "text-left"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Intervalo ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                class: "text-left"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Ações ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          (openBlock(true), createBlock(Fragment, null, renderList(__props.records.hour[index], (item, count) => {
                                            return openBlock(), createBlock(_component_v_row, {
                                              key: index,
                                              "no-gutters": ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  class: "text-left"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(count + 1), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  class: "text-left"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.input), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  class: "text-left"
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
                                                  class: "text-left"
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
                                                  class: "text-left"
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
                                                  cols: "2",
                                                  class: "text-left"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, {
                                                      "prepend-icon": "mdi-pencil",
                                                      variant: "outlined",
                                                      size: "x-small",
                                                      color: "orange",
                                                      class: "mb-1"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Ajuste ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_expansion_panels, { variant: "accordion" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_expansion_panel, {
                                elevation: "0",
                                style: { "background-color": "blueviolet", "color": "white" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_expansion_panel_title, { "hide-actions": true }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, { "no-gutters": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "4",
                                            class: "d-flex justify-start"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Dia ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "4",
                                            class: "text--secondary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Tempo trabalhado ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "4",
                                            class: "text--secondary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Status ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.records.hour, (day, index) => {
                                return openBlock(), createBlock(_component_v_expansion_panel, {
                                  elevation: "0",
                                  key: index
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_expansion_panel_title, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, { "no-gutters": "" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "4",
                                              class: "d-flex justify-start"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(formatDate(index.slice(0, 10))), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_col, {
                                              cols: "4",
                                              class: "text--secondary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.records.totalHour[index]), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_col, {
                                              cols: "4",
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
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_expansion_panel_text, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, {
                                          "no-gutters": "",
                                          class: "p-2",
                                          style: { "background-color": "rgb(213, 213, 213)" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              class: "text-left"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" # ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              class: "text-left"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Entrada ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              class: "text-left"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Saida ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              class: "text-left"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Tempo trabalhado ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              class: "text-left"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Intervalo ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              class: "text-left"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Ações ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.records.hour[index], (item, count) => {
                                          return openBlock(), createBlock(_component_v_row, {
                                            key: index,
                                            "no-gutters": ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                class: "text-left"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(count + 1), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                class: "text-left"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.input), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                class: "text-left"
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
                                                class: "text-left"
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
                                                class: "text-left"
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
                                                cols: "2",
                                                class: "text-left"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, {
                                                    "prepend-icon": "mdi-pencil",
                                                    variant: "outlined",
                                                    size: "x-small",
                                                    color: "orange",
                                                    class: "mb-1"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Ajuste ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
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
                        createVNode(_component_v_expansion_panels, { variant: "accordion" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_expansion_panel, {
                              elevation: "0",
                              style: { "background-color": "blueviolet", "color": "white" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panel_title, { "hide-actions": true }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, { "no-gutters": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "4",
                                          class: "d-flex justify-start"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Dia ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "4",
                                          class: "text--secondary"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Tempo trabalhado ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "4",
                                          class: "text--secondary"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Status ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.records.hour, (day, index) => {
                              return openBlock(), createBlock(_component_v_expansion_panel, {
                                elevation: "0",
                                key: index
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_expansion_panel_title, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, { "no-gutters": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "4",
                                            class: "d-flex justify-start"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(formatDate(index.slice(0, 10))), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_col, {
                                            cols: "4",
                                            class: "text--secondary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.records.totalHour[index]), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_col, {
                                            cols: "4",
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
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_expansion_panel_text, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, {
                                        "no-gutters": "",
                                        class: "p-2",
                                        style: { "background-color": "rgb(213, 213, 213)" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            class: "text-left"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" # ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            class: "text-left"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Entrada ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            class: "text-left"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Saida ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            class: "text-left"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Tempo trabalhado ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            class: "text-left"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Intervalo ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            class: "text-left"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Ações ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.records.hour[index], (item, count) => {
                                        return openBlock(), createBlock(_component_v_row, {
                                          key: index,
                                          "no-gutters": ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              class: "text-left"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(count + 1), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              class: "text-left"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.input), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              class: "text-left"
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
                                              class: "text-left"
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
                                              class: "text-left"
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
                                              cols: "2",
                                              class: "text-left"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  "prepend-icon": "mdi-pencil",
                                                  variant: "outlined",
                                                  size: "x-small",
                                                  color: "orange",
                                                  class: "mb-1"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Ajuste ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
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
                      createVNode(_component_v_expansion_panels, { variant: "accordion" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_expansion_panel, {
                            elevation: "0",
                            style: { "background-color": "blueviolet", "color": "white" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_expansion_panel_title, { "hide-actions": true }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, { "no-gutters": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "4",
                                        class: "d-flex justify-start"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Dia ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "4",
                                        class: "text--secondary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Tempo trabalhado ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "4",
                                        class: "text--secondary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Status ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.records.hour, (day, index) => {
                            return openBlock(), createBlock(_component_v_expansion_panel, {
                              elevation: "0",
                              key: index
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panel_title, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, { "no-gutters": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "4",
                                          class: "d-flex justify-start"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(formatDate(index.slice(0, 10))), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_col, {
                                          cols: "4",
                                          class: "text--secondary"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.records.totalHour[index]), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_col, {
                                          cols: "4",
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
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_expansion_panel_text, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, {
                                      "no-gutters": "",
                                      class: "p-2",
                                      style: { "background-color": "rgb(213, 213, 213)" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "2",
                                          class: "text-left"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" # ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "2",
                                          class: "text-left"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Entrada ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "2",
                                          class: "text-left"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Saida ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "2",
                                          class: "text-left"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Tempo trabalhado ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "2",
                                          class: "text-left"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Intervalo ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "2",
                                          class: "text-left"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Ações ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.records.hour[index], (item, count) => {
                                      return openBlock(), createBlock(_component_v_row, {
                                        key: index,
                                        "no-gutters": ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            class: "text-left"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(count + 1), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            class: "text-left"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.input), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            class: "text-left"
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
                                            class: "text-left"
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
                                            class: "text-left"
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
                                            cols: "2",
                                            class: "text-left"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                "prepend-icon": "mdi-pencil",
                                                variant: "outlined",
                                                size: "x-small",
                                                color: "orange",
                                                class: "mb-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Ajuste ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
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
const Acompanhamento = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4b039259"]]);
export {
  Acompanhamento as default
};
