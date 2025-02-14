import supabase from "../../src/api/supabase-client.js";

export async function getTotalRows() {

    const {count, error} = await supabase.from("vocabulary_words").select("*", { count: "exact", head: true});
    if ( error ) { 
        console.log("There was an error fetching total rows", error);
    }

    console.log("Rows: ",count);
    return count;

}

export default async function handler(req, res) {

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        
        const totalRows = await getTotalRows();
        let randomRow;
        let data = null;
        let error = null;
        do {
            randomRow = Math.floor(Math.random() * totalRows) + 1;
            console.log("Random row: ", randomRow);
            const { data: rowData, error } = await supabase
                .from("vocabulary_words")
                .select("*")
                .eq("id", randomRow)
                .single();

            console.log(rowData);
            if ( rowData ) {
                data = rowData;
            }
        }
        while ( !data )

        console.log(data);
        if ( error ) {
            console.log("There was an error retreiving random word", error);
        }
        return res.json({word: data});
    }
    catch ( error ) {
        console.log("There was an error retreiving random word", error);
    }
}