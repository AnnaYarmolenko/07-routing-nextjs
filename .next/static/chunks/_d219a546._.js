(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNote",
    ()=>createNote,
    "deleteNote",
    ()=>deleteNote,
    "fetchNoteById",
    ()=>fetchNoteById,
    "fetchNotes",
    ()=>fetchNotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
async function fetchNotes(SearchText, page, tag) {
    const params = {
        search: SearchText,
        page,
        perPage: 10
    };
    if (tag) {
        params.tag = tag;
    }
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('https://notehub-public.goit.study/api/notes', {
        params,
        headers: {
            Authorization: "Bearer ".concat(("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFubmE4ODc5bnNAZ21haWwuY29tIiwiaWF0IjoxNzU1MzU0MjQ0fQ.lADgaUWDnqwj9lw30tMRnhSGOJus9adQoUOz8eAkz0Y"))
        }
    });
    return response.data;
}
async function fetchNoteById(noteId) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://notehub-public.goit.study/api/notes/".concat(noteId), {
        headers: {
            Authorization: "Bearer ".concat(("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFubmE4ODc5bnNAZ21haWwuY29tIiwiaWF0IjoxNzU1MzU0MjQ0fQ.lADgaUWDnqwj9lw30tMRnhSGOJus9adQoUOz8eAkz0Y"))
        }
    });
    return response.data;
}
async function deleteNote(noteId) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("https://notehub-public.goit.study/api/notes/".concat(noteId), {
        headers: {
            Authorization: "Bearer ".concat(("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFubmE4ODc5bnNAZ21haWwuY29tIiwiaWF0IjoxNzU1MzU0MjQ0fQ.lADgaUWDnqwj9lw30tMRnhSGOJus9adQoUOz8eAkz0Y"))
        }
    });
    return response.data;
}
async function createNote(newNote) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('https://notehub-public.goit.study/api/notes', newNote, {
        headers: {
            Authorization: "Bearer ".concat(("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFubmE4ODc5bnNAZ21haWwuY29tIiwiaWF0IjoxNzU1MzU0MjQ0fQ.lADgaUWDnqwj9lw30tMRnhSGOJus9adQoUOz8eAkz0Y"))
        }
    });
    return response.data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/@modal/(.)notes/[id]/NotePreview.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backBtn": "NotePreview-module__U-az_a__backBtn",
  "container": "NotePreview-module__U-az_a__container",
  "content": "NotePreview-module__U-az_a__content",
  "date": "NotePreview-module__U-az_a__date",
  "header": "NotePreview-module__U-az_a__header",
  "item": "NotePreview-module__U-az_a__item",
  "tag": "NotePreview-module__U-az_a__tag",
});
}),
"[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotePreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f40$modal$2f282e29$notes$2f5b$id$5d2f$NotePreview$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/@modal/(.)notes/[id]/NotePreview.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function NotePreview(param) {
    let { id } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { data, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "note",
            id
        ],
        queryFn: {
            "NotePreview.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchNoteById"])(id)
        }["NotePreview.useQuery"],
        refetchOnMount: false
    });
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading, please wait..."
    }, void 0, false, {
        fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
        lineNumber: 22,
        columnNumber: 25
    }, this);
    if (error || !data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Something went wrong."
    }, void 0, false, {
        fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
        lineNumber: 23,
        columnNumber: 30
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f40$modal$2f282e29$notes$2f5b$id$5d2f$NotePreview$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f40$modal$2f282e29$notes$2f5b$id$5d2f$NotePreview$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f40$modal$2f282e29$notes$2f5b$id$5d2f$NotePreview$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: data.title
                        }, void 0, false, {
                            fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f40$modal$2f282e29$notes$2f5b$id$5d2f$NotePreview$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
                            children: data.tag
                        }, void 0, false, {
                            fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f40$modal$2f282e29$notes$2f5b$id$5d2f$NotePreview$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: data.content
                }, void 0, false, {
                    fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f40$modal$2f282e29$notes$2f5b$id$5d2f$NotePreview$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].date,
                    children: new Date(data.createdAt).toLocaleString()
                }, void 0, false, {
                    fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f40$modal$2f282e29$notes$2f5b$id$5d2f$NotePreview$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backBtn,
                    onClick: ()=>router.back(),
                    children: "← Back"
                }, void 0, false, {
                    fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(NotePreview, "n0w71JOD/doZ2nWuRyGiWMsZbRQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = NotePreview;
var _c;
__turbopack_context__.k.register(_c, "NotePreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d219a546._.js.map