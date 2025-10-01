// app/hooks/useTableFilters.ts

import { useState, useMemo } from "react";
import type {
    FilterActions,
    TableFilters,
    UseTableFiltersReturn,
} from "../types/filters";
import { mockQuestions as questions } from "../components/QuestionTable";

const DEFAULT_FILTERS: TableFilters = {
    searchTerm: "",
    statusFilter: "all",
};

export function useTableFilters(): UseTableFiltersReturn {
    const [filters, setFilters] = useState<TableFilters>(DEFAULT_FILTERS);

    const setSearchTerm = (searchTerm: string) => {
        setFilters((currentFilters) => ({
            ...currentFilters,
            searchTerm,
        }));
    };

    const setStatusFilter = (statusFilter: TableFilters["statusFilter"]) => {
        setFilters((currentFilters) => ({
            ...currentFilters,
            statusFilter,
        }));
    };

    const clearAllFilters = () => {
        setFilters(DEFAULT_FILTERS);
    };

    const actions: FilterActions = {
        setSearchTerm,
        setStatusFilter,
        clearAllFilters,
    };

    const filteredQuestions = useMemo(() => {
        let result = [...questions];

        if (filters.searchTerm.trim() !== "") {
            result = result.filter((question) =>
                question.question
                    .toLowerCase()
                    .includes(filters.searchTerm.toLowerCase())
            );
        }

        if (filters.statusFilter !== "all") {
            result = result.filter(
                (question) => question.status === filters.statusFilter
            );
        }

        return result;
    }, [questions, filters]);

    return {
        filters,
        actions,
        filteredQuestions,
        resultCount: filteredQuestions.length,
    };
}
