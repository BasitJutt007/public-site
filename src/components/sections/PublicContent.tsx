import { supabase } from '@/lib/supabase'
import { formatTimestamp } from '@/utils/timeformater'

const PublicContent = async () => {
    const { data } = await supabase.from('content').select('*').eq('id', 1).single();
    const title = data?.title ?? ''
    const description = data?.description ?? ''
    const titleUpdatedAt = data?.titleUpdatedAt ?? ''
    const descriptionUpdatedAt = data?.descriptionUpdatedAt ?? ''

    return (
        <div className="max-w-2xl w-full bg-[#1e3261] p-8 rounded-2xl shadow-xl space-y-6 text-left h-[500px] flex flex-col overflow-hidden">
            <div>
                <h1 className="text-4xl font-bold mb-1 text-white ">{title}</h1>
                <p className="text-sm text-slate-300">
                    Last updated: {formatTimestamp(titleUpdatedAt)}
                </p>
            </div>

            <div className="flex-grow overflow-y-auto scrollbar-thin pr-2">
                <p className="text-lg text-white/90 whitespace-pre-line">{description}</p>
            </div>

            <div className="pt-2 mt-auto">
                <p className="text-sm text-slate-300">
                    Description last updated: {formatTimestamp(descriptionUpdatedAt)}
                </p>
            </div>
        </div>
    )
}

export default PublicContent