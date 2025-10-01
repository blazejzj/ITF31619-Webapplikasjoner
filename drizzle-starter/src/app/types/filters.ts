import { Question } from "./core";

type TableFilters = {
    searchTerm: string;
    statusFilter: "all" | "draft" | "published" | "archived";
};

type FilterActions = {
    setSearchTerm: (term: string) => void;
    setStatusFilter: (status: TableFilters["statusFilter"]) => void;
    clearAllFilters: () => void;
};

type UseTableFiltersReturn = {
    filters: TableFilters;
    actions: FilterActions;
    filteredQuestions: Question[];
    resultCount: number;
};

export type { TableFilters, FilterActions, UseTableFiltersReturn };
