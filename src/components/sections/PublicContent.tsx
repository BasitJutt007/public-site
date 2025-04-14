import { supabase } from '@/lib/supabase'
import { formatTimestamp } from '@/utils/timeformater'

const PublicContent = async () => {
    const { data } = await supabase.from('content').select('*').eq('id', 1).single();
    const title = data?.title ?? ''
    const description = data?.description ?? ''
    const titleUpdatedAt = data?.titleUpdatedAt ?? ''
    const descriptionUpdatedAt = data?.descriptionUpdatedAt ?? ''

    return (
        <div className="max-w-3xl w-full bg-gradient-to-br from-[#1e3261] to-[#394d7b] p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] space-y-8 text-white h-[500px] flex flex-col overflow-hidden">
            <div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">{title}</h1>
                <p className="text-sm text-slate-300">
                    🕒 Title last updated: {formatTimestamp(titleUpdatedAt)}
                </p>
            </div>

            <div className="flex-grow overflow-y-auto scrollbar-thin pr-1">
                <p className="text-base text-white/90 whitespace-pre-line leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="pt-2 mt-auto border-t border-white/10 ">
                <p className="text-sm text-slate-300">
                    📝 Description last updated: {formatTimestamp(descriptionUpdatedAt)}
                </p>
            </div>
        </div>
    )
}

export default PublicContent