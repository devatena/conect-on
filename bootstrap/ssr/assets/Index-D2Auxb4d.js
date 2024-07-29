import { defineComponent, ref, reactive, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    records: Object,
    prestadores: Object,
    selected: Number,
    dateFilter: {
      type: Object,
      default: {
        dataInicial: "",
        dataFinal: ""
      }
    }
  },
  setup(__props) {
    const pageTitle = ref(" | Acompanhamento de Horas");
    const props = __props;
    const date = reactive({
      dataInicial: props.dateFilter.dataInicial,
      dataFinal: props.dateFilter.dataFinal
    });
    const selectedId = ref(props.selected);
    function searchList() {
      router.visit("/gestao/acompanhamento", {
        method: "post",
        data: {
          id: selectedId.value,
          dataInicial: date.dataInicial,
          dataFinal: date.dataFinal
        }
      });
    }
    function itemProps(item) {
      return {
        title: item.name,
        subtitle: item.role
      };
    }
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
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_painel_gestao = resolveComponent("painel-gestao");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
      const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
      const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
      _push(ssrRenderComponent(_component_painel_gestao, mergeProps({
        backTo: "true",
        "page-name": pageTitle.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_select, {
                          modelValue: selectedId.value,
                          "onUpdate:modelValue": ($event) => selectedId.value = $event,
                          label: "Prestador de serviço",
                          "item-props": itemProps,
                          items: __props.prestadores,
                          "item-text": "id",
                          "item-value": "id"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_select, {
                            modelValue: selectedId.value,
                            "onUpdate:modelValue": ($event) => selectedId.value = $event,
                            label: "Prestador de serviço",
                            "item-props": itemProps,
                            items: __props.prestadores,
                            "item-text": "id",
                            "item-value": "id"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          modelValue: date.dataInicial,
                          "onUpdate:modelValue": ($event) => date.dataInicial = $event,
                          label: "Data Inicial",
                          type: "date"
                        }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          modelValue: date.dataFinal,
                          "onUpdate:modelValue": ($event) => date.dataFinal = $event,
                          label: "Data Final",
                          type: "date"
                        }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "2",
                    class: "btn-filter"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          onClick: ($event) => searchList(),
                          class: "btn-search",
                          disabled: selectedId.value == null
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Buscar`);
                            } else {
                              return [
                                createTextVNode(" Buscar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          onClick: ($event) => cleanfilter()
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Limpar Filtro`);
                            } else {
                              return [
                                createTextVNode(" Limpar Filtro")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            onClick: ($event) => searchList(),
                            class: "btn-search",
                            disabled: selectedId.value == null
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Buscar")
                            ]),
                            _: 1
                          }, 8, ["onClick", "disabled"]),
                          createVNode(_component_v_btn, {
                            onClick: ($event) => cleanfilter()
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Limpar Filtro")
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
                    createVNode(_component_v_col, { cols: "3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_select, {
                          modelValue: selectedId.value,
                          "onUpdate:modelValue": ($event) => selectedId.value = $event,
                          label: "Prestador de serviço",
                          "item-props": itemProps,
                          items: __props.prestadores,
                          "item-text": "id",
                          "item-value": "id"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
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
                          disabled: selectedId.value == null
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Buscar")
                          ]),
                          _: 1
                        }, 8, ["onClick", "disabled"]),
                        createVNode(_component_v_btn, {
                          onClick: ($event) => cleanfilter()
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Limpar Filtro")
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
            if (JSON.stringify(__props.records.hour) !== "[]") {
              _push2(ssrRenderComponent(_component_v_expansion_panels, { variant: "accordion" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_expansion_panel, {
                      elevation: "0",
                      style: { "background-color": "blueviolet", "color": "white" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_expansion_panel_title, { "hide-actions": true }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "4",
                                        class: "d-flex justify-start"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Dia `);
                                          } else {
                                            return [
                                              createTextVNode(" Dia ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "4",
                                        class: "text--secondary"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Tempo trabalhado `);
                                          } else {
                                            return [
                                              createTextVNode(" Tempo trabalhado ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "4",
                                        class: "text--secondary"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Status `);
                                          } else {
                                            return [
                                              createTextVNode(" Status ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
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
                                }, _parent5, _scopeId4));
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
                          }, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                    _push3(`<!--[-->`);
                    ssrRenderList(__props.records.hour, (day, index) => {
                      _push3(ssrRenderComponent(_component_v_expansion_panel, {
                        elevation: "0",
                        key: index
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_v_expansion_panel_title, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_v_col, {
                                          cols: "4",
                                          class: "d-flex justify-start"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(formatDate(index.slice(0, 10)))}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(formatDate(index.slice(0, 10))), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_v_col, {
                                          cols: "4",
                                          class: "text--secondary"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(__props.records.totalHour[index])}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(__props.records.totalHour[index]), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_v_col, {
                                          cols: "4",
                                          class: "text--secondary"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              if (!__props.records.errors[index]) {
                                                _push7(ssrRenderComponent(_component_v_icon, { icon: "mdi-check-all" }, null, _parent7, _scopeId6));
                                              } else {
                                                _push7(`<!---->`);
                                              }
                                              if (__props.records.errors[index]) {
                                                _push7(ssrRenderComponent(_component_v_icon, { icon: "mdi-alert" }, null, _parent7, _scopeId6));
                                              } else {
                                                _push7(`<!---->`);
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
                                        }, _parent6, _scopeId5));
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
                                  }, _parent5, _scopeId4));
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
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_expansion_panel_text, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_v_row, {
                                    "no-gutters": "",
                                    class: "p-2",
                                    style: { "background-color": "rgb(213, 213, 213)" }
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_v_col, {
                                          cols: "2",
                                          class: "text-left"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` # `);
                                            } else {
                                              return [
                                                createTextVNode(" # ")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_v_col, {
                                          cols: "2",
                                          class: "text-left"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` Entrada `);
                                            } else {
                                              return [
                                                createTextVNode(" Entrada ")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_v_col, {
                                          cols: "2",
                                          class: "text-left"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` Saida `);
                                            } else {
                                              return [
                                                createTextVNode(" Saida ")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_v_col, {
                                          cols: "2",
                                          class: "text-left"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` Tempo trabalhado `);
                                            } else {
                                              return [
                                                createTextVNode(" Tempo trabalhado ")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_v_col, {
                                          cols: "2",
                                          class: "text-left"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` Intervalo `);
                                            } else {
                                              return [
                                                createTextVNode(" Intervalo ")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_v_col, {
                                          cols: "2",
                                          class: "text-left"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` Ações `);
                                            } else {
                                              return [
                                                createTextVNode(" Ações ")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
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
                                  }, _parent5, _scopeId4));
                                  _push5(`<!--[-->`);
                                  ssrRenderList(__props.records.hour[index], (item, count) => {
                                    _push5(ssrRenderComponent(_component_v_row, {
                                      key: index,
                                      "no-gutters": ""
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(_component_v_col, {
                                            cols: "2",
                                            class: "text-left"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`${ssrInterpolate(count + 1)}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(count + 1), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                          _push6(ssrRenderComponent(_component_v_col, {
                                            cols: "2",
                                            class: "text-left"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`${ssrInterpolate(item.input)}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(item.input), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                          _push6(ssrRenderComponent(_component_v_col, {
                                            cols: "2",
                                            class: "text-left"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`${ssrInterpolate(item.output)} `);
                                                if (!item.output) {
                                                  _push7(ssrRenderComponent(_component_v_icon, { icon: "mdi-alert" }, null, _parent7, _scopeId6));
                                                } else {
                                                  _push7(`<!---->`);
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
                                          }, _parent6, _scopeId5));
                                          _push6(ssrRenderComponent(_component_v_col, {
                                            cols: "2",
                                            class: "text-left"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`${ssrInterpolate(item.hour_complete)} `);
                                                if (!item.hour_complete) {
                                                  _push7(ssrRenderComponent(_component_v_icon, { icon: "mdi-alert" }, null, _parent7, _scopeId6));
                                                } else {
                                                  _push7(`<!---->`);
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
                                          }, _parent6, _scopeId5));
                                          _push6(ssrRenderComponent(_component_v_col, {
                                            cols: "2",
                                            class: "text-left"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`${ssrInterpolate(count == 0 ? " " : interHours(
                                                  __props.records.hour[index][count - 1].output,
                                                  item.input
                                                ))} <br data-v-5e1c9923${_scopeId6}>`);
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
                                          }, _parent6, _scopeId5));
                                          _push6(ssrRenderComponent(_component_v_col, {
                                            cols: "2",
                                            class: "text-left"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(_component_v_btn, {
                                                  "prepend-icon": "mdi-pencil",
                                                  variant: "outlined",
                                                  size: "x-small",
                                                  color: "orange",
                                                  class: "mb-1"
                                                }, {
                                                  default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(` Ajuste `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Ajuste ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
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
                                          }, _parent6, _scopeId5));
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
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
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
                            }, _parent4, _scopeId3));
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
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
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
              }, _parent2, _scopeId));
            } else if (__props.selected) {
              _push2(`<div class="mensagem" data-v-5e1c9923${_scopeId}><h1 data-v-5e1c9923${_scopeId}>Nenhum dado encontrado!</h1></div>`);
            } else {
              _push2(`<div class="mensagem" data-v-5e1c9923${_scopeId}><h1 data-v-5e1c9923${_scopeId}>Selecione um prestador!</h1></div>`);
            }
          } else {
            return [
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_select, {
                        modelValue: selectedId.value,
                        "onUpdate:modelValue": ($event) => selectedId.value = $event,
                        label: "Prestador de serviço",
                        "item-props": itemProps,
                        items: __props.prestadores,
                        "item-text": "id",
                        "item-value": "id"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
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
                        disabled: selectedId.value == null
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Buscar")
                        ]),
                        _: 1
                      }, 8, ["onClick", "disabled"]),
                      createVNode(_component_v_btn, {
                        onClick: ($event) => cleanfilter()
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Limpar Filtro")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              JSON.stringify(__props.records.hour) !== "[]" ? (openBlock(), createBlock(_component_v_expansion_panels, {
                key: 0,
                variant: "accordion"
              }, {
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
              })) : __props.selected ? (openBlock(), createBlock("div", {
                key: 1,
                class: "mensagem"
              }, [
                createVNode("h1", null, "Nenhum dado encontrado!")
              ])) : (openBlock(), createBlock("div", {
                key: 2,
                class: "mensagem"
              }, [
                createVNode("h1", null, "Selecione um prestador!")
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Gestao/Acompanhamento/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e1c9923"]]);
export {
  Index as default
};
