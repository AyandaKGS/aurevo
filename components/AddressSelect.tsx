"use client"

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export default function AddressAutocomplete({ onSelect }: { onSelect: (address: string) => void }) {
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const fetchSuggestionsMt = useMutation({
        mutationFn: async () => {
            const { data } = await axios.get("/api/places", {
                params: {
                    input: debouncedQuery
                }
            });

            console.error("Data", data);

            return data;
        }
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query)
        }, 1000) // 1 second delay

        return () => clearTimeout(timer)
    }, [query]);

    // fetch when debouncedQuery updates
    useEffect(() => {
        if (!debouncedQuery.trim()) {
            setSuggestions([])
            return
        }

        (async function fetchSuggestions() {
            try {
                fetchSuggestionsMt.mutate(undefined, {
                    onSuccess: (data) => {
                        const preds = data.predictions || [];
                        console.error(preds[0].description)
                        setSuggestions(preds.map((p: any) => p.description));
                    },
                    onError: (error) => {
                        console.error("Error getting suggestions", error.message);
                        toast.error("Error getting suggestions", {
                            description: error.message
                        });
                    }
                });

            } catch (error: any) {
                console.error("Error fetching suggestions:", error);
            }
        })()

    }, [debouncedQuery])

    return (
        <div className="relative w-full">
            <Command className="w-full">
                <CommandInput
                    placeholder="Enter property address"
                    value={query}
                    onValueChange={(val) => {
                        setQuery(val)
                    }}
                />
                {suggestions.length > 0 && (
                    <CommandList className="absolute top-full left-0 w-full bg-white border rounded-md shadow-lg z-50 no-scrollbar">
                        <CommandGroup heading="Suggestions">
                            {suggestions.map((address, idx) => (
                                <CommandItem
                                    key={idx}
                                    onSelect={() => {
                                        setQuery(address)
                                        onSelect(address)
                                        setSuggestions([])
                                    }}
                                >
                                    {address}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                        {suggestions.length === 0 && <CommandEmpty>No results found.</CommandEmpty>}
                    </CommandList>
                )}
            </Command>
        </div>
    )
}
